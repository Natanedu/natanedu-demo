const os = require("os");

const checkRoom = (sockets, roomName) => {
  const { adapter } = sockets;
  const { rooms } = adapter;

  const room = rooms[roomName];
  const clients = Object.keys(room || {}).length;
  const available = clients - 1 < 2;

  console.log(
    `Room ${roomName} have ${clients} clients. Available: ${available}`
  );

  return { available, clients };
};

const emitToRoom = sockets => room => (event, ...args) => {
  sockets.in(room).emit(event, ...args);
};

const onCreateOrJoin = sockets => socket => room => {
  const { available, clients } = checkRoom(sockets, room);

  if (!available) {
    socket.emit("room-full", room);
    return;
  }

  if (clients === 0) {
    socket.join(room);
    console.log(`Client ${socket.id} has created a room ${room}`);
    socket.emit("room-created", room, socket.id);
  } else {
    console.log(`Client ${socket.id} has joined to room ${room}`);
    socket.join(room);
    socket.emit("joined", room, socket.id);
    socket.emit(() => emitToRoom(sockets)(room)("ready"), 1000);
  }
};

const onICECandidate = sockets => (room, data) => {
  emitToRoom(sockets)(room)("candidate", data);
};

const onOffer = sockets => (room, offer) => {
  emitToRoom(sockets)(room)("offer", offer);
};

const onAnswer = sockets => (room, answer) => {
  emitToRoom(sockets)(room)("answer", answer);
};

const onSuccess = sockets => room => {
  emitToRoom(sockets)(room_id)("success");
};

const onHangUp = sockets => socket => room => () => {
  console.log(`Client ${socket.id} hang up call at room ${room}`);

  setTimeout(() => socket.disconnect(true), 1500);

  emitToRoom(sockets)(room)("hang-up");
};

const onIPAddr = socket => () => {
  const ifaces = os.networkInterfaces();

  for (let dev in ifaces) {
    ifaces[dev].forEach(details => {
      const { family, address } = details.address;

      if (family === "IPv4" && address !== "127.0.0.1") {
        socket.emit("ipaddr", address);
      }
    });
  }
};

const onDisconnecting = sockets => socket => reason => {
  console.log(`Client ${socket.id} disconnected. Reason: ${reason}`);

  Object.keys(socket.rooms).forEach(room => {
    sockets.in(rooms).emit("client-disconnected", socket.id);
  });
};

module.exports = {
  onCreateOrJoin,
  onAnswer,
  onOffer,
  onICECandidate,
  onSuccess,
  onHangUp,
  onIPAddr,
  onDisconnecting
};

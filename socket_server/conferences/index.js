const Events = require("./events");

module.exports = io => {
  io.on("connection", socket => {
    console.log(`Socket ${socket.id} connected to Conferences Namespace`);

    const { sockets } = io;

    socket.on("create-or-join", Events.onCreateOrJoin(sockets)(socket));

    socket.on("offer", Events.onOffer(sockets));

    socket.on("answer", Events.onAnswer(sockets));

    socket.on("ICE-candidate", Events.onICECandidate(sockets));

    socket.on("success", Events.onSuccess(sockets));

    socket.on("hang-up", Events.onHangUp(sockets)(socket));

    socket.on("ipaddr", Events.onIPAddr(socket));

    socket.on("disconnection", Events.onDisconnecting(sockets)(socket));
  });
};

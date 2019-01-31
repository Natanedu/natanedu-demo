const Events = require("./events");

module.exports = io => {
  io.on("connection", socket => {
    console.log(`Socket ${socket.id} connected to Conferences Namespace`);

   

    socket.on("create-or-join", Events.onCreateOrJoin(io)(socket));

    socket.on("offer", Events.onOffer(io));

    socket.on("answer", Events.onAnswer(io));

    socket.on("ICE-candidate", Events.onICECandidate(io));

    socket.on("success", Events.onSuccess(io));

    socket.on("hang-up", Events.onHangUp(io)(socket));

    socket.on("ipaddr", Events.onIPAddr(socket));

    socket.on("disconnection", Events.onDisconnecting(io)(socket));
  });
};

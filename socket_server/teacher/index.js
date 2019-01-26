const Events = require("./events");

module.exports = (io, student_nsp, { url } = {}) => {
  io.on("connection", socket => {
    console.log(
      `Teacher: Socket (${socket.id}) connected to Teachers Namespace`
    );

    socket.on("try-to-join", Events.onTryToJoin(socket));

    // When a Class is available on a specific topic room
    socket.on(
      "class-accepted",
      Events.onClassAccepted(student_nsp, { url, socket })
    );

    // Makes everything ready to receive wallet id, topic and country of the teacher
    socket.emit("ready");
  });
};

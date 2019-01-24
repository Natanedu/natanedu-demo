const Events = require("./events");

module.exports = (io, teacher_nsp) => {
  io.on("connection", socket => {
    console.log(
      `Student: Socket (${socket.id}) connected to Students notification system`
    );

    // Fired when the Student fills the form and looks for a Class
    socket.on("search-class", Events.onSearchClass(teacher_nsp, socket));

    // Makes everything ready to receive query and search a Teacher
    socket.emit("ready");
  });
};

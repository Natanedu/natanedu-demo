const Socket_Server = require("socket.io");

const Teachers_Socket = require("./teacher");
const Students_Socket = require("./student");

module.exports = app => {
  const io = app ? new Socket_Server(app) : new Socket_Server(3030);

  console.log(
    `WebSocket Server listening on URL http://localhost:${process.env.PORT || 3000}`
  );

  const Teacher_Nsp = io.of("/teachers");
  const Default_Nsp = io.of("/students");

  Teachers_Socket(Teacher_Nsp, Default_Nsp);
  Students_Socket(Default_Nsp, Teacher_Nsp);
};

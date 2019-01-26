const Socket_Server = require("socket.io");

const Teachers_Socket = require("./teacher");
const Students_Socket = require("./student");
const Conferences_Socket = require("./conferences");

module.exports = (url, app) => {
  const io = app ? new Socket_Server(app) : new Socket_Server(3030);

  console.log(
    `WebSocket Server listening on URL http://localhost:${process.env.PORT ||
      3000}`
  );

  const Teacher_Nsp = io.of("/teachers");
  const Default_Nsp = io.of("/students");
  const Conferences_Nsp = io.of("/conferences");

  Teachers_Socket(Teacher_Nsp, Default_Nsp, { url });
  Students_Socket(Default_Nsp, Teacher_Nsp, { url });
  Conferences_Socket(Conferences_Nsp);
};

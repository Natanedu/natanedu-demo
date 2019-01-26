const Redis = require("ioredis");
const objectHash = require("object-hash");

const { Timer } = require("../lib");

// By the moment, only connects to a localhost redis server.
let redis_server;

  // comment this line if your are not using docker
  redis_server = new Redis(6379, 'redis');
  console.log(redis_server.status)
  // uncommend this line if your redis in localhost
  //redis_server = new Redis();


// Timer Manager (Singleton)
const timerManager = Timer.initialize();

const onTryToJoin = teacher => async ({ wallet, topic, country } = {}) => {
  console.log("Teacher: Joining room and saving teacher's data...");
  try {
    if (redis_server) await redis_server.set(wallet, { topic, country });
    teacher.join(topic);
    teacher.emit("joined", true);
  } catch (error) {
    console.error(
      `Error on Socket ${teacher.id} on 'try-or-join' event:`,
      error
    );
    teacher.emit("joined", false, error);
  }
};

const onClassAccepted = (student_nsp, { url, socket } = {}) => student_id => {
  console.log("Teacher: Class accepted, joining room...");
  timerManager.clearTimeout(student_id);

  const room_url = `${url}/room/${objectHash({
    id: socket.id,
    date: new Date().getMilliseconds()
  })}`;

  student_nsp.to(student_id).emit("teacher-found", room_url);
  socket.emit("joining-room", room_url);
};

module.exports = { onTryToJoin, onClassAccepted };

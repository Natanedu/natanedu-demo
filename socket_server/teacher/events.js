const Redis = require("ioredis");
const { Timer } = require("../lib");

// By the moment, only connects to a localhost redis server.
let redis_server;
if (process.env["NODE_ENV"] !== "development") {
  const Redis = require("ioredis");
  // comment this line if your are not using docker
  redis_server = new Redis(6379, 'redis');
  // uncommend this line if your redis in localhost
  //redis_server = new Redis();
}

// Timer Manager (Singleton)
const timerManager = Timer.initialize();

const onTryToJoin = teacher => async ({ wallet, topic, country } = {}) => {
  console.log("Teacher: Joining room and saving teacher's data...");
  try {
    await redis_server.set(wallet, { topic, country });
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

const onClassAccepted = student_nsp => student_id => {
  console.log("Teacher: Class accepted, joining room...");
  timerManager.clearTimeout(student_id);

  student_nsp.to(student_id).emit("teacher-found");
};

module.exports = { onTryToJoin, onClassAccepted };

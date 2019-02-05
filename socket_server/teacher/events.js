const objectHash = require("object-hash");


const { Timer } = require("../lib");


// Timer Manager (Singleton)
const timerManager = Timer.initialize();

const onTryToJoin = teacher => async ({ wallet, topic, country,lang,min,max } = {}) => {
  console.log("Teacher: Joining room and saving teacher's data...");
  try {
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

const onClassAccepted = (student_nsp, { url, socket } = {}) => ({id,lecture,wallet}) => {
  console.log("Teacher: Class accepted, joining room...");
  timerManager.clearTimeout(id);
  var hash=objectHash({
    id: socket.id,
    date: new Date().getMilliseconds()
  })
  const student_room_url = `${url}/room/student/${hash}?id=${lecture}&teacher=${wallet}`;
  
  const teacher_room_url = `${url}/room/teacher/${hash}?id=${lecture}`;
  socket.emit("joining-room", teacher_room_url);
  student_nsp.to(id).emit("teacher-found", student_room_url);
  
};

module.exports = { onTryToJoin, onClassAccepted };

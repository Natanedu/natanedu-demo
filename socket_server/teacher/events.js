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

const onClassAccepted = (student_nsp, { url, socket } = {}) => student_id => {
  console.log("Teacher: Class accepted, joining room...");
  timerManager.clearTimeout(student_id);
  var hash=objectHash({
    id: socket.id,
    date: new Date().getMilliseconds()
  })
  const student_room_url = `${url}/room/student/${hash}`;
  
  const teacher_room_url = `${url}/room/teacher/${hash}`;
  socket.emit("joining-room", teacher_room_url);
  student_nsp.to(student_id).emit("teacher-found", student_room_url);
  
};

module.exports = { onTryToJoin, onClassAccepted };

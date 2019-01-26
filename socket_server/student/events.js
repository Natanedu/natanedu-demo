const { Timer } = require("../lib");

const timerManager = Timer.initialize();

const onSearchClass = (teachers_nsp, student_socket) => ({
  student_name,
  topic,
  prize,
  country
}) => {
  console.log(
    `Student: Looking for a class with this query, topic: ${topic}, prize: ${prize}, country: ${country}\n Student Name: ${student_name}`
  );

  // Tells to the Client (Teacher) for a Student looking for a Class
  teachers_nsp.to(topic).emit("class-available", {
    student_name,
    id: student_socket.id,
    prize,
    country,
  });

  // Sets a timer. If the not teacher found, emits the event 'teacher-not-found'
  timerManager.setTimeout(student_socket.id, 30000, () => {
    console.log(
      `Student: Teacher not found for the following query, topic: ${topic}, prize: ${prize}, country: ${country}\n Student Name: ${student_name}`
    );
    student_socket.emit("teacher-not-found", {
      student_name,
      prize,
      country
    });
  });
};

module.exports = { onSearchClass };

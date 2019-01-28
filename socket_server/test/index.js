// Example for WebSocket communication on Client Side
const http = require("http");
const objectHash = require("object-hash");

/**
 * To get the Socket.io client, just add at the end of the file the following
 * script tag
 * <script src="/socket.io/socket.io.js"></script>
 */
const Socket_Client = require("socket.io-client");

// WebSocket server
const Socket_Server = require("../");

const Server = http.createServer(() => console.log("Creating Server..."));
Server.listen(3030, () => console.log("Server up on http://localhost:3030"));
const URL = "http://localhost:3030";
Socket_Server(URL, Server);

/**
 * In the client side, you don't need to join this way.
 * Instead, you only need to do this in your js file
 *
 * const socket = io("/teachers");
 */
const teacher = Socket_Client("http://localhost:3030/teachers");

/**
 * Once the Teacher joins to the Teachers namespace, it's going to receive a
 * "ready" event.
 * You only need to collect the data and sending using the emit function of the
 * socket with the event "try-to-join" following of the parameters
 */
teacher.on("ready", () => {
  console.log("Teacher: Connection ready. Sending data...");

  const hash = objectHash("mywalletid", { excludeValues: true });

  const data = { wallet: hash, topic: "Spanish", country: "MX" };

  teacher.emit("try-to-join", data);
});

// Once they sent the data, everything it's done
teacher.on("joined", (isJoined, error) => {
  if (!isJoined) {
    console.log("Teacher: Teacher don't joins to a room. Reason:", error);
    return;
  }
  console.log("Succesfully joined to a room");
});

/**
 * Now you need to stay alert for the event "class-available".
 * The client it's going to receive the following data to show it to the Teacher
 * Now the Teacher can decide if they wants to accept the class or not.
 */
teacher.on("class-available", ({ student_name, id, prize, country }) => {
  console.log("Server: Class Available for teacher");
  console.log("Teacher: Data received:", {
    student_name,
    id,
    prize,
    country
  });

  /**
   * If the Teacher accepts the class, it's going to emit
   * the event "class-accepted" with the parameter id that the Teacher receive
   * in the "class-available" event
   */
  teacher.emit("class-accepted", id);
});

teacher.on("joining-room", url =>
  console.log("Teacher: Joining room for videocall...", url)
);

// The setTimeout it's only for demo purposes
setTimeout(() => {
  // Like the Teacher, the Student joins to the namespace /students
  const student = Socket_Client("http://localhost:3030/students");

  // Server tells that everything it's ready to look for a class
  student.on("ready", () =>
    console.log("Student: Student ready to search for a class")
  );

  /**
   * If the Student searchs for a class and no one of the Teacher accepts after 30 seconds,
   * the Student will receive the "teacher-not-found" event, saying that we can't
   * find a Teacher
   */
  student.on("teacher-not-found", data =>
    console.log("Student: Teacher not found for the following query:", data)
  );

  /**
   * If the server find a Teacher, it's going to emit the event "teacher-found",
   * telling the Student that a Teacher it's going to teach him something with an attached URL */

  student.on("teacher-found", url =>
    console.log("Student: Teacher found, joining to the room...", url)
  );

  /**
   * To look for a class, you only need to emit the event "search-class" with the following
   * data to do a search.
   */
  student.emit("search-class", {
    student_name: "Charlie",
    topic: "Spanish",
    prize: "$58 USD",
    country: "US"
  });
}, 2000);

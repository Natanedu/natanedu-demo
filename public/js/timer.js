


function caluclate() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
        console.log(minutes + "m " + seconds + "s ");
    }
    // If the count down is finished, write some text 
    if (distance == 0) {
        connection.send({ course: "finish" })
        connection.send({ msg: "course is finish!", type: "finish" })
        // stop all local cameras
        connection.attachStreams.forEach(function (localStream) {
            localStream.stop();
        });

        // close socket.io connection
        connection.closeSocket();
        connection.getAllParticipants().forEach(function (participantId) {
            connection.disconnectWith(participantId);
        });
        timecourse.stop();
        //document.getElementById("demo").innerHTML = "You are payed";
    }
}

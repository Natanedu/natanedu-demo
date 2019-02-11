function caluclate() {
    var minutes = parseInt(counterdown / 60, 10);
    var seconds = parseInt(counterdown % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
    // console.log(minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text 
    if (--counterdown <= 0) {
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
        if(type=="teacher"){
            transfer(account);
        }
        //document.getElementById("demo").innerHTML = "You are payed";
    }
}

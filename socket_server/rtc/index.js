const RTCMultiConnectionServer = require('rtcmulticonnection-server');
module.exports = (io = {}) => {
    io.on("connection", socket => {
      console.log(
        `Socket (${socket.id}) connected to webrtc Namespace`
      );
      RTCMultiConnectionServer.addSocket(socket,{
        config: {
            "socketURL": "webrtc/",
            "dirPath": "",
           
            "socketMessageEvent": "message",
            "socketCustomEvent": "streaming",
            "port": "3000",
            "enableLogs": "false",
            "autoRebootServerOnFailure": "true",
            "isUseHTTPs": "false"
        }
      });
  
      
    });
  };
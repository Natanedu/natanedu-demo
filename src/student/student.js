var NatanLectureABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "owners",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x022914a7"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_topic",
        "type": "string"
      }
    ],
    "name": "getByTopic",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x0284ef38"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_teacherAdd",
        "type": "address"
      }
    ],
    "name": "whiteListTeacher",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x0909e248"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_add",
        "type": "address"
      },
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_region",
        "type": "string"
      },
      {
        "name": "_topic",
        "type": "string"
      },
      {
        "name": "_language",
        "type": "string"
      },
      {
        "name": "_minPrice",
        "type": "uint256"
      },
      {
        "name": "_maxPrice",
        "type": "uint256"
      }
    ],
    "name": "registerTeacher",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2667b14a"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_add",
        "type": "address"
      },
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      }
    ],
    "name": "registerStudent",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2ae7b900"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "studentsAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x499ab700"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "teachersAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4f2be468"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_teacherAdd",
        "type": "address"
      }
    ],
    "name": "blackListTeacher",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x63bad5ca"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x715018a6"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_studentAdd",
        "type": "address"
      }
    ],
    "name": "blackListStudent",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x72383696"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "listedTeachers",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x7f72e4d2"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_language",
        "type": "string"
      }
    ],
    "name": "getByLanguage",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x928a0276"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "listedStudents",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9549af3e"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getStudentsCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9828cd15"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "students",
    "outputs": [
      {
        "name": "firstName",
        "type": "string"
      },
      {
        "name": "lastName",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa6c807a9"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "teacherBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xaa1db8f6"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTeachersCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xaace7180"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "lecturesId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xdd317fde"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_studentAdd",
        "type": "address"
      }
    ],
    "name": "whiteListStudent",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xe49a5ab8"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "teachers",
    "outputs": [
      {
        "name": "firstName",
        "type": "string"
      },
      {
        "name": "lastName",
        "type": "string"
      },
      {
        "name": "region",
        "type": "string"
      },
      {
        "name": "topic",
        "type": "string"
      },
      {
        "name": "language",
        "type": "string"
      },
      {
        "name": "minPrice",
        "type": "uint256"
      },
      {
        "name": "maxPrice",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xf0a47f78"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_topic",
        "type": "string"
      },
      {
        "name": "_language",
        "type": "string"
      }
    ],
    "name": "getByTopicLanguage",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xffcc563c"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "teacher",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "lectureId",
        "type": "uint256"
      }
    ],
    "name": "lecturePaid",
    "type": "event",
    "signature": "0x0d6bf6e43205c432532b19e5291ba088ae756474670de6eb826382badf833402"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "teacher",
        "type": "address"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "signature": "0x2d339b1e3334d3f43e7aa6d5b1fa3ca5e4228b2dd547d1710c726019d98e53fa"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "teacher",
        "type": "address"
      }
    ],
    "name": "TeacherWhitelisted",
    "type": "event",
    "signature": "0x60809b1f44f4a1a1316cf3fc1e6b860494e214ec345ad91e5ba0254a01f5a2b1"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "teacher",
        "type": "address"
      }
    ],
    "name": "TeacherBlacklisted",
    "type": "event",
    "signature": "0x431ae4a4895e482440703d9da4a23b1bdf6055cd269d2be49db69a18e5767452"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "teacher",
        "type": "address"
      }
    ],
    "name": "RegisteredTeacher",
    "type": "event",
    "signature": "0x00899eba62073a4a8b6878c7c1f8b7453a286cf4e095fa16a43e08d5235c9c7e"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "student",
        "type": "address"
      }
    ],
    "name": "StudentRegistered",
    "type": "event",
    "signature": "0x413281c709cf2c555b5d6d90e43f841b9ed7d34daa82e221aedbb3773082fcc8"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "student",
        "type": "address"
      }
    ],
    "name": "StudentWhitelisted",
    "type": "event",
    "signature": "0x79e4f6717fda32586e7b681a3af995b1f8a0af92c8c50c0d46866962f1bb83f0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "student",
        "type": "address"
      }
    ],
    "name": "StudentBlacklisted",
    "type": "event",
    "signature": "0xb158cb7e7ade33a18d48ec08211faabea461b04f67ac4cf80ba84e6fc54b11f0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event",
    "signature": "0xf8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c64820"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "generateLectureId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x9771ad28"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lectureId",
        "type": "uint256"
      },
      {
        "name": "_lecturePrice",
        "type": "uint256"
      },
      {
        "name": "_student",
        "type": "address"
      },
      {
        "name": "_teacher",
        "type": "address"
      }
    ],
    "name": "payLecture",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x70690a72"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_teacher",
        "type": "address"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x1a695230"
  }
]
  
var lectureContract = web3.eth.contract(NatanLectureABI);
var contractAddress = '0x068D1d62f8e392457b0149Cb3f2e4C2ae6c56B5a';
var lectureInstance = lectureContract.at(contractAddress);

var getLectureId = function() {
    lectureInstance.lecturesId(function(err, res) {
        if(res){
            console.log(res);
        }
    });    
}

var registerStudent = function(fName,lName) {
  var account;


  web3.eth.getAccounts(function(err, res) {
    if(res[0] != undefined) {
      account = res[0];
      console.log(account);

      lectureInstance.listedStudents(account, function(err, res) {
        wait_instance.close();
        if(err != null) {
          swal ( "Oops" ,  "Something went wrong!" ,  "error" );
        }
        else {
          if(res != 0){
            swal ( "Oops" ,  "User already exist" ,  "error" );
          }
          else {
            lectureInstance.registerStudent(account, fName, lName, function(err, res) {
              if(err != null) {
                console.log(err);
              }
              else {
                console.log(res);
                lectureInstance.listedStudents(account, function(err, res) {
                  if(err != null) {
                      console.log(err);
                  }
                  else {
                      console.log(res);
                  }
                });
              }
            });
          }
        }
      })      
    }
  });
}

var loginStudent = function() {
  var account;
  web3.eth.getAccounts(function(err,res){
    if(res[0] != undefined) {
        account = res[0];
        console.log(account);
  
        lectureInstance.listedStudents(account, function(err, res) {
            if(err != null) {
            swal ( "Oops" ,  "Something went wrong!" ,  "error" );
            }
            else {
                if(res == 0){
                    swal ( "Oops" ,  "Student not found!" ,  "error" );
                }
                else if (res == 1) {
                    swal ( "Oops" ,  "Blacklisted student!" ,  "error" );
                }
                else if ((res == 2) || (res == 3)) {
                    swal("Congrats!", "you're logged in", "success");
                    //redirect to student dashboard             
                    window.location.href="/student/dashboard";
                }
            }
        })      
    }    
  });
}

var toHex = function(message) {
  return web3.toHex(message);
}

async function signMessage(data) {
  var account;
  web3.eth.getAccounts(function(err, res) {
    if(res[0] != undefined) {
      account = res[0];
      console.log(account);

      web3.eth.sign(account, data, function(err, res) {
        if(!err) {
          console.log(res);
        }
        else {
          console.log(err);
        }
      });
    }
  });
}

function sign(account, data) {
  web3.eth.sign(account, data, function(err, res) {
    if(!err) {
      return res
    }
    else {
      return err;
    }
  });
}

function getAllStudents() {
    //get number of teachers
    lectureInstance.getStudentsCount(function(err, res) {
        var studentsCount = res.toNumber();
        //get all teachers addresses
        for(i=0; i<studentsCount; i++) {
            lectureInstance.studentsAddress(i, function(err, res){
                studentsAddresses.push(res);
                lectureInstance.listedStudents(res, function(err, status) {
                    switch(status.toNumber()) {
                        case 1:
                            blacklistedStudentsAddresses.push(res);
                            lectureInstance.students(res, function(err, res) {
                                blacklistedStudents.push(res);
                            });
                            break;
                        case 2:
                            inprocessStudentsAddresses.push(res);
                            lectureInstance.students(res, function(err, res) {
                                inprocessStudents.push(res);
                            });
                            break;
                        case 3: 
                            whitelistedStudentsAddresses.push(res);
                            lectureInstance.students(res, function(err, res) {
                                whitelistedStudents.push(res);
                            });
                            break;
                        default:
                            console.log("unknown status teacher");
                    }
                });
            });
        }
    });
}

function whitelistStudent(studentAddress) {
    web3.eth.getAccounts(function(err, res) {
        if(res[0] != undefined) {
            owner = res[0];
            lectureInstance.whiteListStudent(studentAddress, { from: owner }, function(err, res) {
                if(!err) {
                    swal({
                        title: "Whitelisted",
                        text: "Student whitelisted!",
                        icon: "success",
                        button: "Ok"
                    });
                } 
                else {
                    swal({
                        title: "Error",
                        text: "error!",
                        icon: "error",
                        button: "Cancel"
                    });
                }
            });
        }
    });
}

function blacklistStudent(studentAddress) {
    web3.eth.getAccounts(function(err, res) {
        if(res[0] != undefined) {
            owner = res[0];
            lectureInstance.blackListStudent(studentAddress, { from: owner }, function(err, res) {
                if(!err) {
                    swal({
                        title: "Blacklisted",
                        text: "Student blacklisted!",
                        icon: "success",
                        button: "Ok"
                    });
                } 
                else {
                    swal({
                        title: "Error",
                        text: "error!",
                        icon: "error",
                        button: "Cancel"
                    });
                }
            });
        }
    });
}
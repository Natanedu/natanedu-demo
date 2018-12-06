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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
          }
        ],
        "name": "registerTeacher",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
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
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "event"
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
        "type": "function"
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
            "name": "_teacher",
            "type": "address"
          }
        ],
        "name": "payLecture",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

var lectureContract = web3.eth.contract(NatanLectureABI);
var contractAddress = '0x75f79a47c15babb8f9cedd818e04b112fdcafc6e';
var lectureInstance = lectureContract.at(contractAddress);

var registerTeacher = function(fName, lName, topic, country) {
    var account;
    web3.eth.getAccounts(function(err, res) {
        if(res[0] != undefined) {
            account = res[0];
            console.log(account);

            lectureInstance.listedTeachers(account, function(err, res) {
              if(err != null) {
                alert(err);
              }
              else {
                if(res != 0){
                  alert("User already exist");
                }
                else {
                  lectureInstance.registerTeacher(account, fName, lName, country, topic, function(err, res) {
                    if(err != null) {
                        console.log(err);
                    }
                    else {
                      lectureInstance.listedTeachers(account, function(err, res) {
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
            });
        }
    });
}
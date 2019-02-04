var NatanAdminABI = [
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
      "inputs": [
        {
          "name": "_newAllowed",
          "type": "address"
        }
      ],
      "name": "addAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x70480275"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_toRemove",
          "type": "address"
        }
      ],
      "name": "removeAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x1785f53c"
    }
]

var adminContract = web3.eth.contract(NatanAdminABI);
var contractAddress = '0x9075a17b12183C17A3E6c0CaF669a128Aa8189b6';
var adminInstance = adminContract.at(contractAddress);


var loginOwner = function() {
    var account;
    web3.eth.getAccounts(function(err,res){
        if(res[0] != undefined) {
            account = res[0];
            console.log(account);

            adminInstance.owners(account, function(err, res) {
                if(err != null) {
                    swal( "Oops" ,  "Something went wrong!" ,  "error" );
                }
                else {      
                    console.log(res);         
                    if(res){
                        swal("Congrats!", "you're logged in", "success");
                        setTimeout(function(){ 
                            //redirect to owner dashboard            
                            //window.location.href="/owner/dashboard";
                        }, 1000);
                    }
                    else {
                        swal( "Oops" ,  "You don't have admin access" ,  "error" );
                    }
                }
            })      
        }    
    });
} 

var addOwner = function(newOwnerAddress) {
    web3.eth.getAccounts(function(err, res) {
        if(res[0] != undefined) {
            owner = res[0];
            adminInstance.addAdmin(newOwnerAddress, { from: owner }, function(err, res) {
                if(!err) {
                    swal({
                        title: "Success",
                        text: "Owner added!",
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

var removeOwner = function(ownerAddress) {
    web3.eth.getAccounts(function(err, res) {
        if(res[0] != undefined) {
            owner = res[0];
            adminInstance.removeAdmin(ownerAddress, { from: owner }, function(err, res) {
                if(!err) {
                    swal({
                        title: "Success",
                        text: "Owner removed!",
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



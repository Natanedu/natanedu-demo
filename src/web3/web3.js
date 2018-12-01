/*
var web3 = require('web3');

const isWeb3 = function() {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/N0tGtDdQUJr70MLNeVod"));
    }    
}

module.exports = isWeb3;*/

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/N0tGtDdQUJr70MLNeVod"));
}    


web3.version.getNode(function(error, result){
    if(error) console.log(error);
    if(result) console.log(result);
});

web3.eth.getAccounts(function(error, result) {
    if(error != null) {
        alert("Couldn't get accounts");
    }
    else {
        var account = result[0];
        console.log(account);
    }
});
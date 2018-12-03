var isMetamask;
var isMetamaskUnlocked;
var account;

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
var checkMetamask = function() {
    try {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/N0tGtDdQUJr70MLNeVod"));
        }        
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            alert("Please install metamask plugin");
        }
    }
}

var checkMetamaskUnlocked = function() {
        web3.eth.getAccounts(function(error, result) {
        if(error != null) {
            alert("Couldn't get accounts");
        }
        else {
            account = result[0];
            if(account == undefined){
                alert("Please unlock your Metamask");
            }
        }
    });
}
var isMetamask;
var isMetamaskLocked;
var account;

function checkMetamask() {
    try {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/N0tGtDdQUJr70MLNeVod"));
        }  
        isMetamask = true;  
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            swal( "Oops" ,  "Please install metamask plugin" ,  "error" );
            isMetamask = false;
        }
    }
}

//check if metamask is installed
checkMetamask();

//check if metamask is not locked
//if so, get account address
web3.eth.getAccounts(function(err, res) {
    if(err) {
        swal ( "Oops" ,  "Couldn't get accounts" ,  "error" );
        isMetamaskLocked =  true;
    }
    else {
        if(res[0] == undefined) {
            swal ( "Oops" , "Please unlock your Metamask" ,  "error" );
        
            isMetamaskLocked =  true;
        }
        else {
            account = res[0];
            isMetamaskLocked = false;
        }
    }
});

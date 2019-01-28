var isMetamask;
var isMetamaskLocked;
var account;


function getWalletAccount() {
  web3.eth.getAccounts(function(err, res) {
    if (err) {
      swal("Oops", "Couldn't get accounts", "error");
      isMetamaskLocked = true;
    } else {
      if (res[0] == undefined) {
        swal({
          title: "Opps",
          text: "Please unlock your Metamask",
          icon: "error",
          buttons: false,
          closeOnClickOutside: false
        });
  
        isMetamaskLocked = true;
      } else {
        account = res[0];
        isMetamaskLocked = false;
      }
    }
  });  
}

async function checkMetamask() {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // Request account access if needed
          await ethereum.enable();
          // Acccounts now exposed
      } catch (error) {
        swal({
          title: "Access Denied",
          text: "Please accept connect request!",
          icon: "error",
          buttons: false,
          closeOnClickOutside: false
        });
      }
    }
    else if (typeof web3 !== "undefined") {
      web3 = new Web3(web3.currentProvider);
    } 
    else {
      // set the provider you want from Web3.providers
      web3 = new Web3(
        new Web3.providers.HttpProvider(
          "https://ropsten.infura.io/N0tGtDdQUJr70MLNeVod"
        )
      );
    }
    getWalletAccount();
    isMetamask = true;
  } catch (e) {
    if (e instanceof ReferenceError) {
      swal({
        title: "Opps",
        text: "Please install a Metamask",
        icon: "error",
        buttons: false,
        closeOnClickOutside: false
      });

      isMetamask = false;
    }
  }
}

//check if metamask is installed
//if metamask is not locked
//if so, get account address
checkMetamask();
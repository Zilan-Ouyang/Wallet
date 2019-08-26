const ethers = require('ethers');

// let provider = ethers.getDefaultProvider('ropsten');

// let getAccount = () => {
//     let address = window.web3.eth.accounts[0].toLowerCase();
//     return address;
// };

// var signer = provider.getSigner();

// let tx = await signer.sendTransaction(tx);
// let signature = await signer.signMessage("Hello world");
// let wallet = 
 function getBalance(){
    let wallet = this.window.web3.eth.accounts[0].toLowerCase();
    let balancePromise = wallet.getBalance();
    balancePromise.then((balance) => {
    return balance;
});
}
export default getBalance;
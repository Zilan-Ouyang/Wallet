import { ethers } from 'ethers'

export default class MetaMaskTx {
    constructor(){
        window.ethereum.enable();
        this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        this.signer = this.provider.getSigner();

    }
    
}

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import WalletCard from './WalletCard';

export default function GenerateWallet() {
  const [newWallet, setNewWallet] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [mnemonic, setMnemonic] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = e => {
    e.preventDefault();
    let randomWallet = ethers.Wallet.createRandom();
    setNewWallet(randomWallet.address);
    setPrivateKey(randomWallet.privateKey);
    setMnemonic(randomWallet.mnemonic);
    setShowCard(true);
    handleOpen();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={e => handleClick(e)}>
        Generate New Wallet
      </Button>
      {showCard && (
        <WalletCard
          newWallet={newWallet}
          privateKey={privateKey}
          mnemonic={mnemonic}
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        />
      )}
    </>
  );
}

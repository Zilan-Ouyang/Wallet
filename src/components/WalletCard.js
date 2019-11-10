import React from 'react';

function WalletCard({ props }) {
  const { newWallet, privateKey, mnemonic } = props;
  return (
    <>
      <div>
        <h6>Public Adress:</h6>
        {newWallet}
      </div>

      <div>
        <h6>Private Key:</h6>
        {privateKey}
      </div>
      <div>
        <h6>Mnemonic:</h6>
        {mnemonic}
      </div>
    </>
  );
}

export default WalletCard;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function WalletCard(props) {
  const { newWallet, privateKey, mnemonic, handleClose, open } = props;
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
      style={{ margin: '10rem auto', width: '50vw' }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
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
        </div>
      </Fade>
    </Modal>
  );
}

import React, { component } from 'react';
import { useWeb3 } from '../useWeb3';

function LoggedInfo(props) {
  let w3 = useWeb3();

  if (w3.status === 'READY') {
    return <div>{`${w3.account.address.toString().slice(0, 9)}...`}</div>;
  } else {
    return <div>Not Log In</div>;
  }
}

export default LoggedInfo;

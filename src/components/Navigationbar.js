import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign, faUser } from '@fortawesome/free-solid-svg-icons';
import LoggedInfo from './LoggedInfo';
import './Navigationbar.scss';

export default class Navigationbar extends Component {
  render() {
    return (
      <div className="navigation-container">
        <div className="pythia-logo"></div>
        <div className="navigation-title"> PYTHIA</div>
        <div className="navigation-user">
          {' '}
          <FontAwesomeIcon icon={faUser} /> Signed in as:
        </div>
        <div className="navigation-user-address">
          <LoggedInfo />
        </div>
      </div>
    );
  }
}

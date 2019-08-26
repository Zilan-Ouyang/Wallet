import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign, faUser} from '@fortawesome/free-solid-svg-icons';
//import{faEthereum} from '@fortawesome/free-brands-svg-icons'
import LoggedInfo from './LoggedInfo';
export default class Navigationbar extends Component {
    
    render() {
        return (
                <Navbar bg="dark" variant="dark" expand='lg'>
                    <Navbar.Brand href="/"> Ether<FontAwesomeIcon icon={faWonSign}/>allet </Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Navbar.Text><FontAwesomeIcon icon={faUser}/>  Signed in as: </Navbar.Text>
                    <Navbar.Text><span className="login"><LoggedInfo/></span></Navbar.Text>

                    </Nav>
                </Navbar>
        )
    }
}

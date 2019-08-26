import React, { Component } from 'react'
import {Button, Jumbotron, Container, Row, Col, OverlayTrigger, Card } from 'react-bootstrap';
import { ethers } from 'ethers';
export default class GenerateWallet extends Component {
    constructor(props){
        super(props);
        this.state={
            newWallet: "",
            privateKey: "",
            mnemonic:"",
            showCard: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.walletCard = this.walletCard.bind(this)
    }
    handleClick(e){
        e.preventDefault();
        let randomWallet = ethers.Wallet.createRandom();
        console.log(randomWallet.address, randomWallet.privateKey, randomWallet.mnemonic)
        this.setState({newWallet: randomWallet.address, privateKey: randomWallet.privateKey, mnemonic: randomWallet.mnemonic, showCard: !this.state.showCard});
    }
    walletCard(){
        return (
            <Card>
                <Card.Body><div><h6>Public Adress:</h6>{this.state.newWallet}</div></Card.Body>
                <Card.Body><div><h6>Private Key:</h6>{this.state.privateKey}</div></Card.Body>
                <Card.Body><div><h6>Mnemonic:</h6>{this.state.mnemonic}</div></Card.Body>
            </Card>
        )
    }
    render() {
        return (
            <Container>
                <Jumbotron fluid>
                    {/* <OverlayTrigger trigger="click" placement="right" overlay={this.popover}>  */}
                        <Button variant="outline-primary" onClick={this.handleClick}>Generate New Wallet</Button>
                            {this.state.showCard ? this.walletCard() : null }
                </Jumbotron>
            </Container>
        )
    }
}

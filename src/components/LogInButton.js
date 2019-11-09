import React, {Component} from 'react';
import {Button, Jumbotron, Container, Form, Row, Col, Toast} from 'react-bootstrap';
import { throwStatement } from '@babel/types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
const ethers = require('ethers');

class LogInButton extends Component {
    constructor(props){
        super(props);
        this.state={
            sender:"",
            amount:"",
            receiver:"",
            isShow: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.notificationToast = this.notificationToast.bind(this);
    }

    componentWillMount(){
        window.web3.eth.getAccounts((x, accounts) => {
            if (accounts !== null) {
              //console.log("signed in with", accounts[0])
              this.setState({
                ...this.state,
                sender: accounts[0]
              });
            }
          });
        }
    handleChange(e){
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick(e){
        e.preventDefault();
        console.log(this.state.sender, this.state.receiver, this.state.amount)
       
        let tx = {
                    to: this.state.receiver,
                    value: ethers.utils.parseEther(this.state.amount)
                };
                
                window.web3.eth.sendTransaction(tx, function(err, res){
                    console.log(err)
                    console.log(tx)
                })
                this.setState({isShow: !this.state.isShow});

    }
    notificationToast(){
        return(
            <div aria-live="polite"
                aria-atomic="true"
                style={{
                position: 'relative',
                minHeight: '100px',
                }}>
                <Toast style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%'
                    }} onClose={() => this.setState({isShow:!this.state.isShow})} delay={5000} autohide>
                    <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Notification</strong>
                    <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>Sending {this.state.amount} eth</Toast.Body>
                    <Toast.Body>to {this.state.receiver}</Toast.Body>
                    <Toast.Body>from {this.state.sender}</Toast.Body>
                </Toast>
            </div>
            
        )
    }

    render() {
        return (
                <div>
                    <Jumbotron>
                                <h1>Enjoy the frictionless experience to send ethers globally!</h1>
                                <h3>
                                    Connect with MetaMask to send ethers!
                                </h3>
                                <Container>
                                <Form onSubmit={e => this.handleClick(e)}>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="2">
                                            Sender:
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control name="sender" value={this.state.sender} onChange={this.handleChange}/>
                                        </Col>
                                    </Form.Group>    
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="2">
                                        Receiver
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control name="receiver" placeholder="receiver address" value={this.state.receiver} onChange={this.handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="2">
                                        Amount
                                        </Form.Label>
                                        <Col sm="2">
                                        <Form.Control name="amount" placeholder="in eth" value={this.state.amount} onChange={this.handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Button variant="outline-primary" onClick={this.handleClick}>Send</Button>
                                    </Form>
                                </Container>
                                {this.state.isShow ? this.notificationToast() : null }
                            </Jumbotron>
                    </div>
                )
            }
    }




    // function MetamaskStatus() {
    //     let w3 = useWeb3();
    //     console.log(w3); // look in your JS console
    //     return <div>status = {w3.status}</div>;
    //   }
      
    // function Web3Info() {
    //     let w3 = useWeb3();
        
    //     if (w3.status === 'READY') {
    //         return <div>
    //             <span>Your address: {w3.account.address}</span>
    //             <div>Your network ID: {w3.account.networkId}</div>
    //             <div>Your network Name: {w3.account.networkName}</div>
    //         </div>;
    //     } else {
    //         return (<div>
    //                     <span>web3 not ready: {w3.status}</span>
    //                     <Button variant="success"><FontAwesomeIcon icon={faSignInAlt} onClick={()=> w3.enable()}/> Connect To Log In</Button>
    //                 </div>)
    //     }
    //   }
    // function Web3Address(){
    //     let w3 = useWeb3();
    //     if (w3.status === 'READY') {
    //         return(
    //             w3.account.address
    
    //         )
    //       } else {
    //           return (<div>
    //                     Not Log In
    //                 </div>)
    //       }
    // }
    // // function handleChange(e){
    // //     e.preventDefault();
    // //     this.setState({[e.target.name]: e.target.value})
    // // }
    // function handleClick(e){
    //     e.preventDefault();
    //     let sender = Web3Address();
    //     let receiver = e.receiver.value
    //     let value = e.value.value
    //     let tx = {
    //         to: receiver,
    //         amount: ethers.utils.parseEther(value)
    //     };
        
    //     // let sendPromise = sender.sendTransaction(tx);
        
    //     // sendPromise.then((tx) => {
    //     //     console.log(tx);   
    //     // });
    //     console.log(sender,tx)
    // }
    // function LogInButton (){

    //     return (
    //         <div>
    //         <Jumbotron>
    //                     <h1>Enjoy the frictionless experience to send ethers globally!</h1>
    //                     <h3>
    //                         Connect with MetaMask to send ethers!
    //                     </h3>
    //                     <Container>
    //                         {MetamaskStatus()}
    //                         {Web3Info()}
    //                     </Container>
    //                     <Container>
    //                     <Form onSubmit={e => this.handleClick(e)}>
    //                         <Form.Group as={Row}>
    //                             <Form.Label column sm="2">
    //                                 Sender:
    //                             </Form.Label>
    //                             <Col sm="10">
    //                                 <Form.Control name="sender" value={Web3Address()}/>
    //                             </Col>
    //                         </Form.Group>    
    //                         <Form.Group as={Row}>
    //                             <Form.Label column sm="2">
    //                             Receiver
    //                             </Form.Label>
    //                             <Col sm="10">
    //                             <Form.Control name="receiver" placeholder="receiver address" />
    //                             </Col>
    //                         </Form.Group>
    //                         <Form.Group as={Row}>
    //                             <Form.Label column sm="2">
    //                             Value
    //                             </Form.Label>
    //                             <Col sm="2">
    //                             <Form.Control name="value" placeholder="amount" />
    //                             </Col>
    //                         </Form.Group>
    //                         <Button variant="outline-primary" onClick={(e)=>{handleClick(e)}}>Send</Button>
    //                         </Form>
    //                     </Container>
    //                 </Jumbotron>
    //         </div>
    //     )
    // }


// let provider = ethers.getDefaultProvider();

// function MetamaskStatus() {
//     let w3 = useWeb3();
//     console.log(w3); // look in your JS console
//     return <div>status = {w3.status}</div>;
//   }
  
//   function Web3Info(props) {
//     let w3 = useWeb3();
    
//     if (w3.status === 'READY') {
//         return <div>
//             <span>Your address: {w3.account.address}</span>
//             <div>Your network ID: {w3.account.networkId}</div>
//             <div>Your network Name: {w3.account.networkName}</div>
//         </div>;
//     } else {
//         return (<div>
//                     <span>web3 not ready: {w3.status}</span>
//                     <Button variant="success"><FontAwesomeIcon icon={faSignInAlt} onClick={()=> w3.enable()}/> Connect To Log In</Button>
//                 </div>)
//     }
//   }
// function Web3Address(){
//     let w3 = useWeb3();
//     if (w3.status === 'READY') {
//         return(
//             w3.account.address

//         )
//       } else {
//           return (<div>
//                     Not Log In
//                 </div>)
//       }
// }

// function handleClick(e){
//     e.preventDefault();
//     let sender = e.target.value
//     let receiver = e.target.value
//     let value = e.target.value
//     let tx = {
//         to: receiver,
//         amount: ethers.utils.parseEther(value)
//     };
    
//     // let sendPromise = sender.sendTransaction(tx);
    
//     // sendPromise.then((tx) => {
//     //     console.log(tx);   
//     // });
//     console.log(sender,tx)
// }
// function LogInButton(){
//             return (
//                         <div>
//                     <Jumbotron>
//                                 <h1>Enjoy the frictionless experience to send ethers globally!</h1>
//                                 <h3>
//                                     Connect with MetaMask to send ethers!
//                                 </h3>
//                                 <Container>
//                                     {MetamaskStatus()}
//                                     {Web3Info()}
//                                 </Container>
//                                 <Container>
//                                 <Form onSubmit={e => this.handleClick(e)}>
//                                     <Form.Group as={Row}>
//                                         <Form.Label column sm="2">
//                                             Sender:
//                                         </Form.Label>
//                                         <Col sm="10">
//                                             <Form.Control name="sender" value={Web3Address()}/>
//                                         </Col>
//                                     </Form.Group>    
//                                     <Form.Group as={Row}>
//                                         <Form.Label column sm="2">
//                                         Receiver
//                                         </Form.Label>
//                                         <Col sm="10">
//                                         <Form.Control name="receiver" placeholder="receiver address" />
//                                         </Col>
//                                     </Form.Group>
//                                     <Form.Group as={Row}>
//                                         <Form.Label column sm="2">
//                                         Value
//                                         </Form.Label>
//                                         <Col sm="2">
//                                         <Form.Control name="value" placeholder="amount" />
//                                         </Col>
//                                     </Form.Group>
//                                     <Button variant="outline-primary" onClick={(e)=>{ handleClick(e)} }>Send</Button>
//                                     </Form>
//                                 </Container>
//                             </Jumbotron>
//                     </div>
//   )
      
// }

export default LogInButton;
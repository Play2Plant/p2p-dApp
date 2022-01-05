import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { init, connectWallet, checkConnection } from "../lib/web3";

const Header = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    init()
    checkAddress()
  },[]);

  const checkAddress = async () => {
    const address = await checkConnection()

    setAddress(address)
  }

  const storeAddress = async () => {
      const address = await connectWallet()
      setAddress(address)
      console.log(address)
  }

  const disconnect = async () => {
      console.log("disconnect")
  }


  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
        <LinkContainer to="/leaf">
            <Nav.Link>Leaf</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/nft">
            <Nav.Link>NFT</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/service">
            <Nav.Link>Service</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>

        </Nav>

        {address && 
          <Button onClick={() => disconnect()}>
             {address}
           </Button>
        }

        {!address && 
          <Button onClick={() => storeAddress()}>
             Connect
           </Button>
        }
    

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

import { auto } from '@popperjs/core';
import React from 'react'
import {Container,FormControl,Navbar,Nav,Dropdown, Badge} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar_Cart = () => {
  return (
    <div>
      <Navbar bg='dark' variant="dark" expand="lg" style={{height:80}} className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{display:'flex' , justifyContent:'space-between', paddingLeft:'none'}}>
          <Link to="/home" style={{textDecoration:'none',color:'inherit' ,marginRight: '10px'}}>
            Home
          </Link>
          <Link to='/cart'style={{textDecoration:'none',color:'inherit'}}>
          Cart
          </Link>
          </Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl  placeholder="Enter your  product name..." style={{width:400}}>
                
            </FormControl>
        </Navbar.Text>
        <Nav>
        <Dropdown style={{ right:'auto', left: 0 }}>
    <Dropdown.Toggle variant='success' style={{ width: '100px', display: 'flex' }}>
        
            <FaShoppingCart color='white' fontSize="25px"  />
            <Badge style={{backgroundColor:'none'}}>{10}</Badge>
        
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ minWidth: 370 }}>
        <span style={{ padding: 10 }}>Cart is Empty!</span>
    </Dropdown.Menu>
</Dropdown>

        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar_Cart;
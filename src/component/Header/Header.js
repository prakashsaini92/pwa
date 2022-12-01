import React from "react";
import {Container, Row,Col} from 'react-bootstrap';
import  './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import User from '../../images/user.jpg'


const Header = () => {
    return <>
    
     <Navbar className="header-top" bg="light"  variant="light">
        <Container>
          <Navbar.Brand className="main-head" href="#home">
            <p className="tag-line">Find Your Solution`s</p>
            M H Badaya</Navbar.Brand>
          <Nav >
            <NavLink to="/" className="nav-link UsersWidgets"> <div className="User_profile"> <div className="profiles"><div className="onlineStatus"></div><img src={User}/></div></div></NavLink>
          </Nav>
        </Container>
        
      </Navbar>

      

      


      
     
    </>
}

export default Header;
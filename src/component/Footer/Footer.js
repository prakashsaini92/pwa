import React from "react";
import {Container, Row,Col} from 'react-bootstrap';
import  './Footer.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'


const Footer = () => {
    return <>
    
     <Navbar className="footer-bottom" bg="light"  variant="light">
        <Container>
         
          <Nav  >
            <NavLink to="/" className="nav-link ">  <button className="home-button"> <i className="fa fa-home" ></i></button> <span>home</span> </NavLink>
            <NavLink to="/upload" className="nav-link ">  <button className="home-button"> <i className="fa fa-upload" ></i></button> <span>upload</span> </NavLink>
            <NavLink to="/contact" className="nav-link ">  <button className="home-button"> <i className="fa fa-reorder" ></i></button> <span>Menu</span> </NavLink>
            <NavLink to="/contact" className="nav-link ">  <button className="home-button"> <i className="fa fa-reorder" ></i></button> <span>Menu</span> </NavLink>
           
          </Nav>
        </Container>
        
      </Navbar>

      

     
     
    </>
}

export default Footer;
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Outlet} from 'react-router'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'
import {Container, Row,Col} from 'react-bootstrap';

import { Scrollbars } from 'react-custom-scrollbars-2';


function App() {
 
  return ( <>
  <Header />
  <Container className="contentWidgets">
      <Scrollbars className="mainscroll" > 
  <Outlet /> 
  </Scrollbars>
  </Container>
  <Footer />
  </>);
}

export default App;

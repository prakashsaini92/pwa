import React from "react";
import {Container, Row,Col} from 'react-bootstrap';
import  './Landing.css'



const LandingPage = () => {
    return <>
     
      
        <Row>
          <Col >
          <Container>
          <Row>
          <Col className="mt-4">
            <div className="searchwidgets">
            <button className="search-button"> <i className="fa fa-search" style={{fontSize:"22px"}}></i></button>
           <input type="text" placeholder="Find here" className="searchinput"/>
            </div>

           

            <div className="widgets-list">
                <div className="widgets-bar">
                <div className="widget-graph">
                    <div className="title-widgets">Cradit</div>
                    <div className="subtitle-widgets">outstanding</div>
                </div>
                <div className="main-title"><span className="moneyType">Rs.</span>250000</div>
                </div>

                <div className="widgets-bar">
                <div className="widget-graph">
                    <div className="title-widgets">Cradit</div>
                    <div className="subtitle-widgets">outstanding</div>
                </div>
                <div className="main-title"><span className="moneyType">Rs.</span>250000</div>
                </div>

                
            </div>

            <div className="widgets-list">
                <div className="widgets-bar">
                <div className="widget-graph">
                    <div className="title-widgets">Cradit</div>
                    <div className="subtitle-widgets">outstanding</div>
                </div>
                <div className="main-title"><span className="moneyType">Rs.</span>250000</div>
                </div>

                <div className="widgets-bar">
                <div className="widget-graph">
                    <div className="title-widgets">Cradit</div>
                    <div className="subtitle-widgets">outstanding</div>
                </div>
                <div className="main-title"><span className="moneyType">Rs.</span>250000</div>
                </div>

                
            </div>

            <div className="widgets-list">
                <div className="widgets-bar">
                <div className="widget-graph">
                    <div className="title-widgets">Cradit</div>
                    <div className="subtitle-widgets">outstanding</div>
                </div>
                <div className="main-title"><span className="moneyType">Rs.</span>250000</div>
                </div>

                <div className="widgets-bar">
                <div className="widget-graph">
                    <div className="title-widgets">Cradit</div>
                    <div className="subtitle-widgets">outstanding</div>
                </div>
                <div className="main-title"><span className="moneyType">Rs.</span>250000</div>
                </div>

                
            </div>
         
          
          </Col>
        </Row>
      </Container>
         
          
          </Col>
        </Row>
      


      
     
    </>
}

export default LandingPage;
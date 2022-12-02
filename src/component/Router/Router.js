import React from "react";
import {Route, Routes, useLocation}  from 'react-router';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import App from "../../App";
import Grid from "../Grid/grid";
import HomePage from '../HomePage/LandingPage'



const Router = () => {
    const location = useLocation();
    return (
       <>
        <Routes location={location}>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<HomePage />} />
                <Route  path="/upload" element={<Grid />} />
                <Route  path="/contact" element={<HomePage />} />
             </Route>

          </Routes>
       
       </>
    )
}

export default Router


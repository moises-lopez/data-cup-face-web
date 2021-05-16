import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import '../css/navbar.css'

const Navbar = () => {

    const history = useHistory()

    let handleNavigation = (url) => {
        history.push(url)
    }

    return (  
        <React.Fragment>
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title" onClick={() => handleNavigation('/Homepage')}>
                    Lambda Technologies
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div class="nav-links">
                    <a onClick={() => handleNavigation('/Homepage')}>Facial Recognition</a>
                    <a onClick={() => handleNavigation('/Training')}>Train Model</a>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Navbar;
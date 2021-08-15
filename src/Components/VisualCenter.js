import React from 'react';
import {NavButton} from "./NavButton";
import "../index.css";
import "./VisualCenter.css";
// import earth from "./Videos/earth.mp4";

function VisualCenter() {
    return (
        <div className="visual-container">
            {/* <video src={earth} autoPlay loop muted /> */}
            <h1>World is Spinning Around!</h1>
            <p>Are you game?!?</p>

            <div className="visual-buttons">
                <NavButton 
                    className="buttons"
                    buttonStyle="button--outline"
                    buttonSize="button--large"
                >
                    Hook-up!
                </NavButton>

                <NavButton 
                    className="buttons"
                    buttonStyle="button--primary"
                    buttonSize="button--large"
                >
                    Get started <i className="far fa-thumbs-up"/>
                </NavButton>
            </div>
        </div>
    )
}

export default VisualCenter;
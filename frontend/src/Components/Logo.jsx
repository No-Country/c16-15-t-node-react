import React from "react";
import "../styles/Logo.css";
import logo_eco from "../assets/logo_eco"


function Logo() {
    return (
        <div className="logo-container">
            <img className="logo-imagen"
                src={logo_eco}
                alt='/Logo'
            />
        </div>
    )
}

export default Logo;
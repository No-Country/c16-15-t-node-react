import React from "react";
// import "../styles/Logo.css"; //* anteriormente
import "/src/styles/Logo.css";
// import "./assets/logo_eco"; //* anteriormente
import logo_eco from "/src/assets/logo_eco.png"


function Logo() {
    return (
        <div className="logo-container">
            <img className="logo-imagen"
                src={logo_eco}
                alt='Logo Ecofinder'
            />
        </div>
    )
}

export default Logo;
import React from "react";
import nuevo_logo from "../../assets/nuevo_logo.png"
import "../../../src/styles.css";


function Logo() {
    return (
        <div>
            <img 
                src={nuevo_logo}
                alt='Logo Ecofinder'
            />
        </div>
    )
}

export default Logo;

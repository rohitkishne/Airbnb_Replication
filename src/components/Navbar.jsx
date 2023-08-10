import React from "react"
import logo from "../assets/airbnb-logo.png"
function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="nav-logo" className="nav-logo" />
        </nav>
    )
}

export default Navbar;
import React from "react";
import './style.css'
import logo from '../url/Logo.png'

class Navbar extends React.Component{
  
    render(){
        return (
            <div className="navbar">

                <div className="logo">
                    <img src={logo} alt="Img" />
                    <h1>Explore</h1>
                </div>
            <div className="navlist-wrapper">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Tours</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Hotel</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-item-link" href="#">Login</a>
                    </li>
                </ul>

                <button className="sing-up"> Sign Up</button>
            </div>
            </div>  
        )
    }
}

export default Navbar;
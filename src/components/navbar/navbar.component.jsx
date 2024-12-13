import { Link, NavLink, Outlet } from "react-router-dom"
import Logo from "../../images/logo.png"

import { FaBars } from "react-icons/fa6";

import {links} from "../../data.js"
import "./navbar.css"
import { Fragment, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Footer from "../Footer.jsx";


const Navbar = () => {

    const [navDisplayed, setNavDisplayed] = useState(false);

    const toggleNav = ()=>{
        setNavDisplayed(!navDisplayed);
    }
  return (
    <Fragment>
        <nav key={1}>
            <div className="container nav-container">
                <Link to={"/"} className="logo" rel="noopener noreferrer nofollow" onClick={toggleNav}>
                    <img src={Logo} alt="Nav Logo" />
                </Link>
                <ul className={`nav__links ${navDisplayed? 'flex':'nav_hidden'}`}>
                    {links.map( ({name, path}, index) => <li> <NavLink key={index} onClick={toggleNav} className={({isActive}) => isActive ? "active-nav":""} to={path}>{name}</NavLink> </li>  )}
                </ul>
                <button className="nav__toggle-btn" onClick={toggleNav}>
                    {navDisplayed ?
                        <FaTimes/>:
                        <FaBars/>}
                </button>
            </div>
        </nav>
        <main className="main_outlet" key={2}>
            <Outlet/>
        </main> 
        <Footer key={3}/>
    </Fragment>
  )
}

export default Navbar
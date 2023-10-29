import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

function Navbar() {

    const [show, setShow] = useState(false)
    const showNavbar = () => {
        setShow(!show)
    };

    return (
        <>
            <header className="flex justify-between items-center p-4 max-lg:p-1 h-28 w-full fixed z-50 ">
                <div>
                    <NavLink to="/" className="flex items-center">
                        <img
                            src="https://photechindia.in/assets/img/photech-logo.png"
                            className="h-24 max-lg:h-16 ml-3 relative z-10"
                            alt="Photech"
                        />
                    </NavLink>
                </div>
                <nav className={show ? "responsive_nav" : ""} >
                    <NavLink to="/" className="text-xl font-bold">Home</NavLink>
                    <NavLink to="/about" className="text-xl font-bold">About</NavLink>
                    <NavLink to="/" className="text-xl font-bold">Services</NavLink>
                    <NavLink to="/" className="text-xl font-bold">Industries We Serve</NavLink>
                    <NavLink to="/" className="text-xl font-bold">Careers</NavLink>
                    <NavLink to="/contact" className="text-xl font-bold">Contact Us</NavLink>

                </nav>
                <button
                    id=""
                    className="lg:hidden relative z-10 right-2"
                    onClick={showNavbar}>
                    <span className="nav-btn"> {show ? <FaTimes /> : <FaBars />} </span>
                </button>
            </header>
        </>
    );
}

export default Navbar;
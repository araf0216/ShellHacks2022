import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar-left'>
                <h1>SubAlert</h1>
            </div>
            <div className='Navbar-right'>
                <button>
                    <Link to="/signin">Sign In</Link>
                </button>
                <button>
                    <Link to="/signup">Sign Up</Link>
                </button>
            </div>  
        </div>
    )
}
export default Navbar
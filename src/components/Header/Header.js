import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link className="logo" to='/'>last.fm</Link>
            </div>
        </div>
    );
};

export default Header;
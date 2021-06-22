import React from 'react'
import { NavLink } from "react-router-dom";

import '../Style/Components/Navbar.scss';

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar--Menu">
                <NavLink to="/"><img className="Navbar--Logo Navbar--Menu-Item" src="/Images/logo.png" alt="logo" /></NavLink>
                <NavLink activeClassName="selected" to="/faqs" className="Navbar--Menu-Item">על הבחירות</NavLink>
                <NavLink activeClassName="selected" to="/parties" className="Navbar--Menu-Item">מפלגות</NavLink>
                <NavLink activeClassName="selected" to="/whotochoose" className="Navbar--Menu-Item">במי לבחור?</NavLink>
            </div>
            <NavLink activeClassName="selected" to="/about" className="Navbar--About Navbar--Menu-Item">אודות</NavLink>
        </div>
    )
}

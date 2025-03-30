import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Nav/Nav.css"; 

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (e, index) => {
        e.preventDefault();
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <nav className="navbar" ref={navRef}>
            <a href="/" className="logo">Yantra</a>
            <div className="menu-btn" onClick={toggleMenu}>☰</div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <div className="dropdown">
                    <a href="#" onClick={(e) => toggleDropdown(e, 0)} className="dropdown-toggle">
                        AI Powered
                    </a>
                    <div className={`dropdown-content ${activeDropdown === 0 ? 'active' : ''}`}>
                        <a href="#">Chatbot</a>
                        <a href="#">AI Design</a>
                        <a href="#">AI Tool</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" onClick={(e) => toggleDropdown(e, 1)} className="dropdown-toggle">
                        Web Development
                    </a>
                    <div className={`dropdown-content ${activeDropdown === 1 ? 'active' : ''}`}>
                        <a href="#">React</a>
                        <a href="#">Angular</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" onClick={(e) => toggleDropdown(e, 2)} className="dropdown-toggle">
                        Cloud Services
                    </a>
                    <div className={`dropdown-content ${activeDropdown === 2 ? 'active' : ''}`}>
                        <a href="#">AWS</a>
                        <a href="#">AZURE</a>
                        <a href="#">GCP</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" onClick={(e) => toggleDropdown(e, 3)} className="dropdown-toggle">
                        Data Analytics
                    </a>
                    <div className={`dropdown-content ${activeDropdown === 3 ? 'active' : ''}`}>
                        <a href="#">Tableau</a>
                        <a href="#">Powerbi</a>
                        <a href="#">Databricks</a>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" onClick={(e) => toggleDropdown(e, 4)} className="dropdown-toggle">
                        Cybersecurity
                    </a>
                    <div className={`dropdown-content ${activeDropdown === 4 ? 'active' : ''}`}>
                        <a href="#">Cloudflare</a>
                        <a href="#">Web Security</a>
                    </div>
                </div>
                <div >
                    <button className="btn-light">
                        <a href="/contact">Contact</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
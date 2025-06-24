"use client";

import React, { useState } from 'react';
import { FaBars as HamburgerIcon } from 'react-icons/fa';
import './header.scss';

const menu_items: string[] = [
    "Home", "Demographics", "Academics", "Lifestyle", 
    "Co-op", "Pre-MGTE", "Gallery", "Class Awards", "About"
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <button
                className="header_hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
                <HamburgerIcon className="HamburgerIcon"/>
            </button>

            {menuOpen && (
                <div className="header_menu-overlay" onClick={() => setMenuOpen(false)}>
                <nav className="header_menu" onClick={(e) => e.stopPropagation()}>
                    <ul>
                        {menu_items.map((item, index) => (
                            <li key={index}>
                                <a href={item === 'Home' ? "/" : `/${item.replace(" ", "-").toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                </div>
            )}
            </header>
    );
};

export default Header;
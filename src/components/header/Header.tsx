"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaBars as HamburgerIcon } from 'react-icons/fa';
import './header.scss';

const menu_items: string[] = [
    "Home", "Demographics", "Academics", "Lifestyle",
    "Co-op", "Pre-MGTE", "MGTE", "Gallery", "Class Awards", "About"
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMenuOpen(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            setMenuOpen(true);
        }
    };
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    const isAboutPage = pathname === '/about';

    useEffect(() => {
        if (isAboutPage) {
            setIsVisible(true);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isAboutPage]);

    return (
        <header className={`header ${!isVisible ? 'header--hidden' : ''}`}>
            <button
                className="header_hamburger"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
                <HamburgerIcon className="HamburgerIcon" />
            </button>

            {(menuOpen || isClosing) && (
                <div
                    className={`header_menu-overlay ${isClosing ? 'header_menu-overlay--closing' : ''}`}
                    onClick={closeMenu}
                >
                    <nav className="header_menu" onClick={(e) => e.stopPropagation()}>
                        <ul>
                            {menu_items.map((item, index) => (
                                <li key={index}>
                                    <a href={item === 'Home' ? "/" : `/${item.replace(" ", "-").toLowerCase()}`} onClick={closeMenu}>
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

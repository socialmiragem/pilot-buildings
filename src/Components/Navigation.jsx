import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const containerRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => setIsOpen(false);

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Animate dropdown open/close
    useEffect(() => {
        const el = dropdownRef.current;
        if (el) {
            el.style.maxHeight = isOpen ? '100%' : '0px';
            el.style.opacity = isOpen ? 1 : 0;
            el.style.transform = isOpen ? 'translateY(0)' : 'translateY(-10px)';
            el.style.pointerEvents = isOpen ? 'auto' : 'none';
        }
    }, [isOpen]);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav id="navigation" aria-label="Main Navigation" ref={containerRef} className={isOpen ? 'active-navigation' : ''}>
            <div className='align-items-stretch d-flex flex-column h-100 justify-content-md-between nav_container'>
                <div className='d-flex flex-column align-items-center pt-md-3 pt-2'>
                    <Link to="/" aria-label="Home">
                        <img src="./assets/images/icons/logo.svg" alt="Logo" className='img-fluid mb-3' />
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className='border-0 bg-transparent p-0 menu_icon'
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        <span className='text-light-grey-48'>
                            <FontAwesomeIcon
                                icon={isOpen ? faXmark : faBars}
                                className="fs-4 mb-3 text-light-gray-48"
                            />
                        </span>
                    </button>
                </div>

                <div className='d-flex flex-column align-items-center mobile_menu mt-md-0 mt-4'>
                    <Link to="/" aria-label="Chief">
                        <img src="./assets/images/icons/chief.svg" alt="Chief" className='img-fluid mb-3 d-none d-md-block' />
                    </Link>
                    <Link to="/" aria-label="Britespan">
                        <img src="./assets/images/icons/britespan.svg" alt="Britespan" className='img-fluid mb-3 d-none d-md-block' />
                    </Link>
                    <Link to="/" aria-label="CBC">
                        <img src="./assets/images/icons/cbc.svg" alt="CBC" className='img-fluid mb-3 d-none d-md-block' />
                    </Link>
                    <Link to="tel:1234567890" aria-label="Call Us">
                        <FontAwesomeIcon icon={faPhone} className='mb-3 text-light-gray-48' />
                    </Link>
                </div>
            </div>

            <nav
                ref={dropdownRef}
                className={`dropdown_aside ${isOpen ? 'active-navigation' : ''}`}
                aria-label="Dropdown Navigation"
                style={{
                    maxHeight: '0px',
                    overflow: 'hidden',
                    opacity: 0,
                    transform: 'translateY(-10px)',
                    transition: 'all 0.4s ease',
                    pointerEvents: 'none'
                }}
            >
                <ul className='links'>
                    <li><Link to="/building-types" className={isActive("/building-types")}>Building Types</Link></li>
                    <li><Link to="/process" className={isActive("/process")}>Process</Link></li>
                    <li><Link to="/gallery" className={isActive("/gallery")}>Gallery</Link></li>
                    <li><Link to="/contact" className={isActive("/contact")}>Contact Us</Link></li>
                </ul>
                <ul className='links'>
                    <li><Link to="/advantages" className={isActive("/advantages")}>Advantages</Link></li>
                    <li><Link to="/services" className={isActive("/services")}>Services</Link></li>
                    <li><Link to="/about" className={isActive("/about")}>About Us</Link></li>
                    <li><Link to="/order" className={`text-uppercase ${isActive("/order")}`}>Your Order</Link></li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navigation;

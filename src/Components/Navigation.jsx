import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const el = dropdownRef.current
        if (el) {
            if (isOpen) {
                el.style.maxHeight = "100%"
                el.style.opacity = 1
                el.style.transform = 'translateY(0)'
                el.style.pointerEvents = 'auto'
            } else {
                el.style.maxHeight = '0px'
                el.style.opacity = 0
                el.style.transform = 'translateY(-10px)'
                el.style.pointerEvents = 'none'
            }
        }
    }, [isOpen])

    return (
        <div id="navigation">
            <div className='align-items-stretch d-flex flex-column h-100 justify-content-md-between nav_container'>
                <div className='d-flex flex-column align-items-center'>
                    <Link><img src="./assets/images/icons/Group1156.svg" alt="" className='img-fluid mb-3' /></Link>
                    <button onClick={toggleMenu} className='border-0 bg-transparent p-0 menu_icon'>
                        <img
                            src={isOpen ? "./assets/images/icons/cross.png" : "./assets/images/icons/menu.png"}
                            alt="menu"
                            className='img-fluid mb-3'
                            id="menu"
                        />
                    </button>
                </div>
                <div className='d-flex flex-column align-items-center mobile_menu mt-md-0 mt-4'>
                    <Link><img src="./assets/images/icons/Maskgroup.svg" alt="" className='img-fluid mb-3 d-none d-md-block' /></Link>
                    <Link><img src="./assets/images/icons/image53.svg" alt="" className='img-fluid mb-3 d-none d-md-block' /></Link>
                    <Link><img src="./assets/images/icons/image57.svg" alt="" className='img-fluid mb-3 d-none d-md-block' /></Link>
                    <Link><img src="./assets/images/icons/phone.svg" alt="" className='img-fluid mb-3 filter' /></Link>
                </div>
            </div>

            <div
                ref={dropdownRef}
                className="dropdown_aside"
                style={{
                    maxHeight: '0px',
                    overflow: 'hidden',
                    opacity: 0,
                    transform: 'translateY(-10px)',
                    transition: 'all 0.4s ease',
                    pointerEvents: 'none'
                }}
            >
                <div className='links'>
                    <Link to="">Building Types</Link>
                    <Link to="">Process</Link>
                    <Link to="">Gallery</Link>
                    <Link to="">Contact Us</Link>
                </div>
                <div className='links'>
                    <Link to="">Advantages</Link>
                    <Link to="">Services</Link>
                    <Link to="">About Us</Link>
                    <Link to="" className='text-uppercase'>Your Order</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation

import React, { useState, useEffect, useContext } from 'react'
// dependencies
import { Link, NavLink, useLocation } from 'react-router-dom'
import $ from 'jquery'
// images
import { PopupContext } from '../context/PopupState';
import logoImg from '../images/logo.png'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    const [navOpen, setNavOpen] = useState(false)
    const [scroll, setScroll] = useState('header-main')
    $(window).scroll(function (e) {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            setScroll('header-main scroll')
        }
        else {
            setScroll('header-main')
        }
    })
    const location = useLocation()
    useEffect(() => {
        setNavOpen(false)
    }, [location.pathname])
    const navLinks = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Services',
            href: '/services',
            subMenu: [
                {
                    title: 'Custom Website',
                    href: '/custom-website'
                },
                {
                    title: 'WordPress Development',
                    href: '/wordpress-development'
                },
                {
                    title: 'Shopify Web Development',
                    href: '/shopify-website'
                },
                {
                    title: 'E-Commerce Solutions',
                    href: '/ecommerce-solutions'
                },
                {
                    title: 'Mobile App Solutions',
                    href: '/mobile-app-solutions'
                },
                {
                    title: 'Logo Designing',
                    href: '/logo-design'
                }
            ]
        },
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Work',
            href: '/work'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title: 'Pricing',
            href: '/pricing'
        },
        {
            title: 'FAQs',
            href: '/faq'
        }
    ]
    return (
        <>
            <div className={navOpen ? 'overlay-body show' : 'overlay-body'} onClick={() => { setNavOpen(false) }}></div>
            <header className={scroll}>
                <div className="container">
                    <nav className={navOpen ? 'opened' : ''}>
                        <Link to="/">
                            <img className='logo' src={logoImg} alt="Brand Name" />
                        </Link>
                        <ul className='nav-menu'>
                            {navLinks.map((navItem, index) => {
                                return (
                                    <li key={index} className={navItem.subMenu ? 'dropdown-wrapper' : ''}>
                                        {/* <Link to={navItem.href}>{navItem.title}</Link> */}
                                        {navItem.subMenu ? <button key={index} className='nav-link'>{navItem.title}</button> : <NavLink key={index} className='nav-link' to={navItem.href}>{navItem.title}</NavLink>}
                                        {navItem.subMenu && <ul className="dropdown">
                                            {navItem.subMenu.map((drpItem, ind) => {
                                                return (
                                                    <li>
                                                        <NavLink key={`drp-${ind}`} className='nav-link' to={drpItem.href}>{drpItem.title}</NavLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>}
                                    </li>
                                )
                            })}
                            <li>
                                <button className='header-btn' onClick={() => { setOpenPopup(!openPopup) }}>Request a Proposal</button>
                            </li>
                        </ul>
                        <button className='header-btn' onClick={() => { setOpenPopup(!openPopup) }}>Request a Proposal</button>
                        <button onClick={() => { setNavOpen(!navOpen) }} className="hameburger"><HiOutlineMenuAlt3 /></button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header

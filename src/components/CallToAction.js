import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PopupContext } from '../context/PopupState';
import { HiMiniArrowUpRight } from "react-icons/hi2";
const CallToAction = ({ title, subHeading, paragraph }) => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    return (
        <>
            <section className="cta-banner">
                <div className="container">
                    <h3 className="theme-h3">{title}</h3>
                    <h4 className="theme-h4">{subHeading}</h4>
                    <p className="theme-p">{paragraph}</p>
                    <ul className="banner-btn">
                        <li><button className='request-btn' onClick={() => { setOpenPopup(!openPopup) }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            Request a Proposal
                        </button></li>
                        <li><Link className="btn-light" to="/contact">Contact Now <HiMiniArrowUpRight /></Link></li>
                    </ul>

                </div>
            </section>
        </>
    )
}

export default CallToAction

import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <ul className='social-links'>
            <li><a className='facebook-link' href="/"><FaFacebookSquare /></a></li>
            <li><a className='instagram-link' href="/"><FaInstagramSquare /></a></li>
            <li><a className='linkedin-link' href="/"><FaLinkedin /></a></li>
            <li><a className='whatsapp-link' href="/"><FaWhatsappSquare /></a></li>
        </ul>
    )
}

export default SocialLinks

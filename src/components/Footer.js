import React from 'react'
import { Col, Row } from 'antd'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col lg={20}>
                            <div className="footer-cta">
                                <Row gutter={[{ sm: 20 }, { sm: 20, xs: 20 }]} style={{ justifyContent: 'center' }}>
                                    <Col md={8} sm={12} xs={24}>
                                        <div className="single-cta">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <div className="cta-text">
                                                <h4 className='theme-h4'>Find us</h4>
                                                <a href="/">Karachi, Pakistan</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={8} sm={12} xs={24}>
                                        <div className="single-cta">
                                            <i className="fas fa-phone"></i>
                                            <div className="cta-text">
                                                <h4 className='theme-h4'>Call us</h4>
                                                <a href="tel:+92 321 9883303">+92 321 9883303</a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={8} sm={12} xs={24}>
                                        <div className="single-cta">
                                            <i className="far fa-envelope-open"></i>
                                            <div className="cta-text">
                                                <h4 className='theme-h4'>Mail us</h4>
                                                <a href="mailto:vertualized@gmail.com">vertualized@gmail.com</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="footer-content">
                                <Row gutter={[{ lg: 50 }, { xs: 20 }]}>
                                    <Col lg={8} xs={24} className="col-xl-4 col-lg-4 mb-50">
                                        <div className="footer-widget">
                                            <div className="footer-logo">
                                                <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                                            </div>
                                            <div className="footer-text">
                                                <p className='theme-p'>To our customers, we extend. We meet your needs, whether they are for full stack development or merely consulting.</p>
                                                <ul className='social-links'>
                                                    <li><a rel="noreferrer" href="https://www.facebook.com/metaversstudios" target='_blank'><FaFacebook /></a></li>
                                                    <li><a rel="noreferrer" href="https://www.instagram.com/metaversstudios1/" target='_blank'><FaInstagram /></a></li>
                                                    <li><a rel="noreferrer" href="https://twitter.com/metaversstudio" target='_blank'><FaTwitter /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12} xs={24} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                        <div className="footer-widget">
                                            <div className="footer-widget-heading">
                                                <h3 className='theme-h4'>Useful Links</h3>
                                            </div>
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">about</Link></li>
                                                <li><Link to="/work">Work</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/faq">FAQs</Link></li>
                                                {/* <li><a href="/custom-website">Custom Website</a></li>
                                                <li><a href="/wordpress-development">Wordpress Development</a></li>
                                                <li><a href="/shopify-website">Shopify Website</a></li>
                                                <li><a href="/ecommerce-solutions">Ecommerce Solutions</a></li>
                                                <li><a href="/mobile-app-solutions">Mobile App Solutions</a></li>
                                                <li><a href="/logo-design">Logo Designing</a></li> */}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg={8} md={12} xs={24} className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                        <div className="footer-widget">
                                            <div className="footer-widget-heading">
                                                <h3 className='theme-h4'>Subscribe</h3>
                                            </div>
                                            <div className="footer-text mb-25">
                                                <p className='theme-p'>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                            </div>
                                            <div className="subscribe-form">
                                                <form action="#">
                                                    <input type="text" placeholder="Email Address" />
                                                    <button type='submit'><FaPaperPlane />
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <Row>
                            <Col lg={12}>
                                <div className="copyright-text">
                                    <p className='theme-p'>Copyright &copy; 2024, All Right Reserved</p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/terms-conditions">Terms & Condition</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

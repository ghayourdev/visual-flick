import React, { useEffect, useRef, useContext } from 'react'
// dependencies
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import { PopupContext } from '../context/PopupState';
import { Fancybox } from "@fancyapps/ui";
import gsap from 'gsap'
import SplitType from 'split-type'
// api data
import { shopifyProjects } from '../content/projects';
const HomeBanner = () => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    const bannerText = useRef(null)
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);
    useEffect(() => {
        const title = new SplitType(bannerText.current)
        gsap.fromTo(title.chars, {
            y: "100%"
        }, {
            y: "0",
            delay: 0.5,
            duration: 0.3,
            stagger: 0.05
        })
    }, [])
    return (
        <>
            <section className='home-banner'>
                <div className="home-hero-gradient-background">
                    <div className="home-hero-blue-bulb"></div>
                    <div className="home-hero-white-logo-background"></div>
                </div>
                <div className="container">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col lg={20} xs={24}>
                            <h1 ref={bannerText} className='theme-h1 cursor-picture'>A Website Company With Multiple Awards</h1>
                            <hr />
                            <div className="banner-row">
                                <Row className='row-item' gutter={[{ md: 50, sx: 0 }, { xs: 50 }]}>
                                    <Col lg={12} xs={24}>
                                        <h4 className="theme-h4">Vertualized</h4>
                                        <ul className='theme-p'>
                                            <li>We are Vertualized, a creative and transparent website development company located in Toronto.</li>
                                        </ul>
                                        <ul className="banner-btn">
                                            <li><button className='request-btn' onClick={()=> {setOpenPopup(!openPopup)}}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Request a Proposal
                                            </button></li>
                                            <li><Link className='contact-btn' to='/contact'>Contact Us <RightOutlined style={{ fontSize: 14, marginLeft: 10 }} /></Link></li>
                                        </ul>
                                    </Col>
                                    <Col lg={12} xs={24}>
                                        <p className="theme-p">Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. At Vertualized, we understand the value of your brand. We provide a range of customized services including branding, website design & development, SEO, marketing consultation, and more.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <div className="project-showcase">
                        <div className="hero-recent-project-backdrop"></div>
                        <Row className='projects-row' gutter={[{ md: 30, sx: 20 }, { xs: 20 }]}>
                            {shopifyProjects.slice(0,4).map((projectItem) => {
                                return (
                                    <Col lg={6} sm={12} xs={24}>
                                        <div className="project-item">
                                            <a href={projectItem.fullImage} data-fancybox="gallery">
                                                <img className='img-fluid' src={projectItem.fullImage} alt="" />
                                            </a>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner

import { Col, Row } from 'antd'
import React, { useEffect, useRef, useContext } from 'react'
import { PopupContext } from '../context/PopupState';
import gsap from 'gsap';
import SplitType from 'split-type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const ServiceBanner = ({ title, desc, slider, imgContain }) => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    const bannerText = useRef(null)
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
            <section className="service-banner">
                <div className="home-hero-gradient-background">
                    <div className="home-hero-blue-bulb"></div>
                    <div className="home-hero-white-logo-background"></div>
                </div>
                <div className="container">
                    <Row style={{ alignItems: 'center' }} gutter={[{ lg: 200 }, {lg:0,xs:30}]}>
                        <Col xl={10} xs={24}>
                            <div className="banner-lft">
                                <h1 ref={bannerText} className="theme-h2 cursor-picture">{title}</h1>
                                <hr />
                                <p className="theme-p">{desc}</p>
                                <ul className="banner-btn">
                                    <li>
                                        <button
                                            className='request-btn'
                                            onClick={() => {
                                                setOpenPopup(!openPopup)
                                            }}
                                        >
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Request a Proposal
                                        </button></li>
                                    <li><Link className="contact-btn">Contact Now <HiMiniArrowUpRight /></Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl={14} xs={24}>
                            <div className="banner-rgt">
                                <Row style={{ alignItems: 'center' }} gutter={[{ lg: 30, xs: 20 }, {}]}>
                                    {slider.map((sliderItem, index) => {
                                        return (
                                            <Col xs={12} key={index}>
                                                <Swiper
                                                    direction={'vertical'}
                                                    className="mySwiper"
                                                    effect='slide'
                                                    loop={true}
                                                    speed={3000}
                                                    slidesPerView={imgContain ? 2 : 1}
                                                    spaceBetween={20}
                                                    autoplay={{
                                                        delay: 2500,
                                                        reverseDirection: index % 2 === 0 ? true : false,
                                                        disableOnInteraction: false,
                                                    }}
                                                    modules={[Autoplay]}
                                                >
                                                    {sliderItem.map((slide, ind) => {
                                                        return (
                                                            <SwiperSlide key={ind}>
                                                                <img style={{ objectFit: imgContain ? 'contain' : 'cover', objectPosition: imgContain ? 'center center' : 'center top' }} src={slide} alt={title} />
                                                            </SwiperSlide>
                                                        )
                                                    })}
                                                </Swiper>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ServiceBanner

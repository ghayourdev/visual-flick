import { Col, Row } from 'antd'
import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { faq } from '../content/faq';
const FAQs = () => {
    return (
        <>
            <section className="faq-sec">
                <div className="container">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col lg={12} xs={24}>
                            <div className="text-center title-sec">
                                <h2 className="theme-h2 bg-clip">FAQs</h2>
                                <h4 className="theme-h4 text-black">Answers To Frequently Asked Questions</h4>
                                <p className="theme-p text-black">Are you curious in how Vertualized, a renowned marketing agency and web design company, runs? For a thorough grasp of our policies and processes, go through our FAQ section.</p>
                                <Link className='btn-light' to="/">See All FAQs <HiMiniArrowUpRight /></Link>
                            </div>
                        </Col>
                        <Col lg={16} xs={24}>
                            <Collapse className="faq-accordions" bordered={false} accordion items={faq} />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default FAQs

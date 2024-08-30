import React from 'react'
import { Col, Row } from 'antd'
import ServiceItem from './ServiceItem';
import AdditionalServices from './AdditionalServices';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Services = ({ services, additionalServices }) => {
  return (
    <>
      <section className='services-listing'>
        <div className="container">
          <div className="text-center">
            <h2 className="theme-h2 bg-clip">Services</h2>
            <h4 className="theme-h4">Creative Solutions Crafted To Help You Achieve The <br /> Perfect Digital Presence</h4>
            <Link className='btn-light' to="/">See All Services <HiMiniArrowUpRight /></Link>
          </div>
          <Row style={{ justifyContent: 'center' }}>
            <Col lg={20} xs={24}>
              <div className="services-wrapper">
                {services.map((service, index) => {
                  return (
                    <ServiceItem index={index} service={service} />
                  )
                })}
              </div>
              <hr />
              <AdditionalServices additionalServices={additionalServices} />
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Services

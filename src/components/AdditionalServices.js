import React, {useContext} from 'react'
import { additionalServices } from '../content/services'
import { Col, Row } from 'antd'
// import { Link } from 'react-router-dom'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { PopupContext } from '../context/PopupState';

const AdditionalServices = () => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    return (
        <>
            <div className="additional-services">
                <h4 className="theme-h4">We can also help with,</h4>
                <div className="additional-wrapper">
                    <Row style={{ alignItems: 'stretch' }} gutter={[{ lg: 30, md: 20 }, { md: 20, xs: 20 }]}>
                        {additionalServices.map((service, index) => {
                            return (
                                <Col key={index} xl={6} lg={8} md={12}>
                                    <div className="card-item">
                                        <h4 className="theme-h4">{service.title}</h4>
                                        <p className="theme-p">{service.paragraph}</p>
                                        {/* <Link className='btn-light' to={service.link.href}>{service.link.title} <HiMiniArrowUpRight /></Link> */}
                                        <button className='btn-light' onClick={()=>{setOpenPopup(!openPopup)}}>{service.link.title} <HiMiniArrowUpRight /></button>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default AdditionalServices

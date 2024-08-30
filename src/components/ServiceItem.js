import React, {
    // useRef,
    // useEffect,
    useContext
} from 'react'
import { Col, Row } from 'antd'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { PopupContext } from '../context/PopupState';
const ServiceItem = ({ service, index }) => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    return (
        <div className="service-item" key={index}>
            <Row style={{ flexDirection: (index + 1) % 2 === 0 ? 'row-reverse' : 'row' }} gutter={[{ lg: 50, md: 30, xs: 0 },{md:30, xs: 20}]}>
                <Col lg={10} md={12} xs={24}>
                    <div className="img-wrapper">
                        <div className="main-services-gradient" style={{ backgroundColor: service.imageShadeColor }}></div>
                        <img className='service-img img-fluid' src={service.image} alt={service.title} />
                    </div>
                </Col>
                <Col lg={14} md={12} xs={24}>
                    <div className="service-content">
                        <h3 className="theme-h3"><Link to={service.link.href}>{parse(service.title)}</Link></h3>
                        {service.paragraph.map((para) => {
                            return (
                                <p className="theme-p">{para}</p>
                            )
                        })}
                        {/* <Link className='btn-light' to={service.link.href}>{service.link.title} <HiMiniArrowUpRight /></Link> */}
                        <button className='btn-light' onClick={()=>{setOpenPopup(!openPopup)}}>{service.link.title} <HiMiniArrowUpRight /></button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ServiceItem

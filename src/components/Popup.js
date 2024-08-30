import React, { useContext, useState } from 'react'
import { PopupContext } from '../context/PopupState';
import { Col, Modal, Row, message } from 'antd';
// import popupImg from '../images/popup-featured.png'
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Popup = () => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    const [messageApi, contextHolder] = message.useMessage();
    const [inputVal, setInputVal] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Budget: '',
        Services: '',
        Message: '',
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputVal({ ...inputVal, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        messageApi.open({
            key: 'form-submitting',
            type: 'loading',
            content: 'Submitting...',
        });
        const formRes = await fetch('https://formspree.io/f/mrgnagnj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type based on your API's requirements
            },
            body: JSON.stringify(inputVal), // Convert the data to JSON format
        })
        console.log("formRes", formRes)
        const formData = await formRes.json()
        if (formData.error) {
            messageApi.open({
                key: 'form-submitting',
                type: 'error',
                content: formData.error,
            });
        } else {
            messageApi.open({
                key: 'form-submitting',
                type: 'success',
                content: 'Submitted!',
                duration: 2,
            });
            setInputVal({
                ...inputVal,
                name: '',
                email: '',
                phone: '',
                message: '',
            })
        }
        window.location.href = '/thankyou '
    }
    return (
        <>
            {contextHolder}
            <Modal
                title="Send us A Message"
                wrapClassName="request-proposal-modal"
                centered
                open={openPopup}
                onOk={() => setOpenPopup(false)}
                okText="Submit"
                closable={true}
                onCancel={() => setOpenPopup(false)}
            >
                <Row style={{ justifyContent: 'space-between', alignItems: 'center' }} gutter={[{ lg: 30 }]}>
                    {/* <Col lg={12}>
                         <img className='img-fluid' src={popupImg} alt="" />
                        <img className='img-fluid' src="https://mir-s3-cdn-cf.behance.net/projects/max_808/dce67d81791429.Y3JvcCwxMzY2LDEwNjgsMTYsNzA2.png" alt="" />
                    </Col> */}
                    <Col lg={24}>
                        <div className="popup-form">
                            <h4 className="theme-h3 text-black">We would love to help you. Get in touch.</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="popup-field">
                                    <input type="text" name='Name' placeholder='Your Name' onChange={handleChange} required />
                                </div>
                                <div className="popup-field">
                                    <input name='Email' type="text" placeholder='Your Email' onChange={handleChange} required />
                                </div>
                                <div className="popup-field">
                                    <input name='Phone' type="text" placeholder='Your Phone' onChange={handleChange} required />
                                </div>
                                <div className="popup-field">
                                    <select name="Services" onChange={handleChange} required >
                                        <option value="" selected disabled>Select Service</option>
                                        <option value="Custom Website">Custom Website</option>
                                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                                        <option value="Logo And Brand Design">Logo And Brand Design</option>
                                        <option value="Web App Development">Web App Development</option>
                                        <option value="Mobile App Development">Mobile App Development</option>
                                        <option value="Video Animation">Video Animation</option>
                                        <option value="Search Engine Optimization">Search Engine Optimization</option>
                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                    </select>
                                </div>
                                <div className="popup-field">
                                    <textarea name='Message' onChange={handleChange} required placeholder='Your Message'></textarea>
                                </div>
                                <div className="popup-btn">
                                    <button className="btn-light">Contact Now <HiMiniArrowUpRight /></button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};
export default Popup;
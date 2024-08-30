import { Col, Row,message } from 'antd';
import React, { useState } from 'react';
import { HiMiniArrowUpRight } from "react-icons/hi2";


const Form = () => {
    const [inputVal, setInputVal] = useState({
        First_Name: '',
        Last_Name: '',
        Email: '',
        Phone: '',
        Budget: '',
        Services: '',
        Message: '',
    })
    const [messageApi, contextHolder] = message.useMessage();
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputVal({ ...inputVal, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
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
        console.log("formData", formData)
        window.location.href = '/thankyou '
    }
    return (
        <div>
            {contextHolder}
            <section className="form">
                <div className="home-hero-blue-bulb"></div>
                <div className="container-md">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col lg={20}>
                            <div className="main-hosted">
                                <div className="aungler">
                                    <h3 className='theme-h3'>Obtain A Free Consultation With An Expert Now!</h3>
                                </div>
                                <h4 className='theme-h4'>Make an appointment right away for a free consultation with a specialist! Together, we will investigate your requirements and create a customized solution.</h4>
                                <form className="cmxform" onSubmit={handleSubmit}>
                                    <Row gutter={[{ lg: 20, xs: 20 }, { lg: 20, xs: 20 }]}>
                                        <Col lg={9} xs={24}>
                                            <Row gutter={[{ lg: 20, xs: 20 }, { lg: 20, xs: 20 }]}>
                                                <Col lg={12} xs={24}>
                                                    <div className="form-field" >
                                                        <input name="First_Name" type="text" placeholder='First Name' onChange={handleChange} required />
                                                    </div>
                                                </Col>
                                                <Col lg={12} xs={24}>
                                                    <div className="form-field" >
                                                        <input name="Last_Name" type="text" placeholder='Last Name' onChange={handleChange} required />
                                                    </div>
                                                </Col>
                                                <Col xs={24}>
                                                    <div className="form-field" >
                                                        <input name="Email" type="email" placeholder='Email' onChange={handleChange} required />
                                                    </div>
                                                </Col>
                                                <Col xs={24}>
                                                    <div className="form-field" >
                                                        <input name="Phone" type="text" placeholder='Phone' onChange={handleChange} required />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col lg={15} xs={24}>
                                            <Row gutter={[{ lg: 20, xs: 20 }, { lg: 20, xs: 20 }]}>
                                                <Col lg={12} xs={24}>

                                                    <div className="form-field">
                                                        <select name="Budget" id="budget" placeholder='Select Budget' onChange={handleChange} required>
                                                            <option value="" selected disabled>Select Budget</option>
                                                            <option value="$100">$100</option>
                                                            <option value="$200">$200</option>
                                                            <option value="$300">$300</option>
                                                            <option value="$400">$400</option>
                                                            <option value="$500">$500</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                                <Col lg={12} xs={24}>

                                                    <div className="form-field">
                                                        <select name="Services" className="valid safari_only" aria-invalid="false" onChange={handleChange} required >
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
                                                </Col>

                                                <Col xs={24}>
                                                    <div className="form-field">
                                                        <textarea name="Message" placeholder="Anything you wanna add" onChange={handleChange} required></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={24}>
                                            <button className="btn-light btn-submit" type='submit' >Submit <HiMiniArrowUpRight /></button>
                                        </Col>
                                    </Row>

                                    <div className="because">
                                        <span>Or contact us using other ways</span>
                                    </div>
                                    <Row>
                                        <Col md={8} xs={8}>
                                            <div className="infocontact">

                                                <ul>
                                                    <li><span>Hire Us</span></li>
                                                    <li>
                                                        {/* <FontAwesomeIcon className="penblue" icon={faHeadset} /> */}
                                                        <button>Live Chat</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={8} xs={8}>
                                            <div className="infocontact">

                                                <ul>
                                                    <li><span>Email</span></li>
                                                    <li>
                                                        {/* <FontAwesomeIcon className="penblue" icon={faEnvelope} /> */}
                                                        <a href="mailto:vertualized@gmail.com">vertualized@gmail.com</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={8} xs={8}>
                                            <div className="infocontact">

                                                <ul>
                                                    <li><span>Phone</span></li>
                                                    <li>
                                                        {/* <FontAwesomeIcon className="penblue" icon={faPhone} /> */}
                                                        <a href="tel:+92 321 9883303">+92 321 9883303</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Form;
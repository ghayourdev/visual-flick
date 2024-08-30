import { Col, Row } from 'antd'
import React from 'react'

const Thankyou = () => {
    return (
        <div className='thankyou'>
            <div style={{margin: '0 auto'}} className="container">
<Row style={{justifyContent: 'center', textAlign: 'center'}}>
    <Col lg={16} sm={24}>
    <h1 className="theme-h2">ThankYou</h1>
            <p className='theme-p'>We have received your online inquiry and forwarded your information to one of our
                Account Directors who will be in touch with you shortly.</p>

            <p className='theme-p'>We look forward to working with you</p>
            </Col>
</Row>
            </div>
            
        </div>
    )
}

export default Thankyou

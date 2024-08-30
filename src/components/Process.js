import React from 'react'
import { Row, Col } from 'antd'
import { processData } from '../content/process'
import ProcessCard from './ProcessCard'

const Process = () => {
  return (
    <>
      <section className='process-sec'>
        <div className="container">
          <Row style={{ justifyContent: 'center' }}>
            <Col lg={20} xs={24}>
              <div className="text-center">
                <h2 className="theme-h2 bg-clip">Process</h2>
                <h4 className="theme-h4 text-black">A Closer Look At Our Methodology</h4>
              </div>
              <div className="process-row">
                <Row gutter={[{ lg: 50, md: 15, xs: 0 }, { lg: 50, xs: 15 }]}>
                  {processData.map((process, index) => {
                    return (
                      <Col lg={6} md={12} xs={24}>
                        <ProcessCard process={process} key={index} />
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

export default Process

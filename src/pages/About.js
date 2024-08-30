import React, { useRef, useEffect } from 'react'
import transition from '../components/transition'
import gsap from 'gsap'
import SplitType from 'split-type'
import { Col, Row } from 'antd'
import innovativeIcon from '../images/innovative-design.png'
import colloborationIcon from '../images/collaboration.png'
import customizedIcon from '../images/customized-solution-icon.png'
import itDrivenIcon from '../images/it-driven-icon.png'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
const About = () => {
  const bannerText = useRef(null)
  const span1 = useRef(null)
  const span2 = useRef(null)
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
    gsap.fromTo(span1.current, {
      x: '0%'
    }, {
      x: '10%',
      duration: 0.5,
      scrollTrigger: {
        trigger: span1.current,
        start: 'top 20%',
        end: 'bottom 10%',
        scrub: true
      }
    });
    gsap.fromTo(span2.current, {
      x: '0%'
    }, {
      x: '-10%',
      duration: 0.5,
      scrollTrigger: {
        trigger: span1.current,
        start: 'top 20%',
        end: 'bottom 10%',
        scrub: true
      }
    });
  }, [])

  return (
    <>
      <div className="about-wrapper">
        <div className="about-banner">
          <div className="container">
            <h1 ref={bannerText} className="theme-h2 cursor-picture">
              <span ref={span1}>Promoting and strengthening</span>
              <span ref={span2}> brands globally</span>
            </h1>
          </div>
        </div>
        <div className="who-are-we">
          <div className="container">
            <Row style={{ justifyContent: 'center' }}>
              <Col xl={10} lg={18} sm={20} xs={24}>
                <h2 className="theme-h2 bg-clip">Who Are We?</h2>
                <h4 className="theme-h4">Dedicated To Providing Excellence</h4>
                <p className="theme-p">At Vertualized, providing exceptional results for our clients is our primary goal. Our flexible staff provides a wide range of marketing services that are specifically designed to meet the demands of every customer. We guarantee successful interaction with a range of consumer groups by consistently modifying our techniques to reflect the most recent developments in marketing. Our committed approach frequently goes above and beyond what our clients anticipate, building a legacy of accomplishment and contentment.</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="why-partner-with-us">
          <div className="container">
            <div className="top-sec text-center">
              <h3 className="theme-h3">Why Partner With Us?</h3>
              <h4 className="theme-h4">Collaboration surpassing Objectives</h4>
            </div>
            <Row style={{ justifyContent: 'center' }}>
              <Col xl={20} xs={24}>
                <Row gutter={[{ lg: 50 }, { md: 30, xs: 20 }]}>
                  <Col lg={12} xs={24}>
                    <div className="partner-item" style={{ backgroundImage: `url(${innovativeIcon})` }}>
                      <h4 className="theme-h4">A Support Team Available Around-the-Clock</h4>
                      <p className="theme-p"> Our committed and knowledgeable support staff is available around-the-clock to help with questions and problems. Enjoy prompt, attentive customer care with proactive advice and quick response times. We take pleasure in supporting your trip and recognize the value of excellent customer service.</p>
                    </div>
                  </Col>
                  <Col lg={12} xs={24}>
                    <div className="partner-item" style={{ backgroundImage: `url(${colloborationIcon})` }}>
                      <h4 className="theme-h4">We Acknowledge Your Ideas</h4>
                      <p className="theme-p">In order to produce corporate designs that really represent the business identity and values, we firmly believe in working together. With our decades of combined knowledge, we can truly understand your ideas and turn them into a brand icon.</p>
                    </div>
                  </Col>
                  <Col lg={12} xs={24}>
                    <div className="partner-item" style={{ backgroundImage: `url(${customizedIcon})` }}>
                      <h4 className="theme-h4">IT-Oriented Development:</h4>
                      <p className="theme-p">Staying ahead in the quickly changing IT industry is essential. Due to the expertise of our programming staff in the most recent frameworks and technologies, your projects are not only modern but also safe for the future. When you work with us, you can take advantage of our extensive technical expertise for developing creative mobile applications and responsive web development to have a powerful, secure, and future-ready online presence.</p>
                    </div>
                  </Col>
                  <Col lg={12} xs={24}>
                    <div className="partner-item" style={{ backgroundImage: `url(${itDrivenIcon})` }}>
                      <h4 className="theme-h4">Individualized Solutions</h4>
                      <p className="theme-p">We give a personalized strategy since we recognize that every job is different. Whether you're a startup, an established business, or an individual entrepreneur, our flexible workforce can meet your specific needs. We take the time to learn about your objectives, target market, and brand in order to deliver solutions that are precisely matched to your vision.</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
        <Form />
      </div>
    </>
  )
}

export default transition(About)

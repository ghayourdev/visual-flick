import React from 'react'
import FAQs from '../components/FAQs'
import transition from '../components/transition'
import Banner from '../components/Banner'
import faqBannerImg from '../images/faq-banner.jpg'
import Form from '../components/Form'
import CallToAction from '../components/CallToAction'

const FAQ = () => {
  return (
    <>
    <Banner bg={faqBannerImg} title="Inquire about your concerns" description="Look Through Our FAQs to Gain Priceless Knowledge. Discover Answers to Frequently Asked Questions and Strengthen Your Path."/>
     <FAQs />
     <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
     <Form />
    </>
  )
}

export default transition(FAQ)

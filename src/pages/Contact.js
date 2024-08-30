import React from 'react'
import transition from '../components/transition'
import Banner from '../components/Banner'
import contactBannerImg from '../images/contact-banner.jpg'
import Form from '../components/Form'
import CallToAction from '../components/CallToAction'

const Contact = () => {
  return (
    <>
      <Banner bg={contactBannerImg} title="Get in touch with us" description="Together, let's bring your ideas to life. Get in touch for unparalleled service and professional solutions."/>
      <Form />
      <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
    </>
  )
}

export default transition(Contact)

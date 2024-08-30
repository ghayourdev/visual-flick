import React from 'react'
import transition from '../components/transition'
import Banner from '../components/Banner'
import serviceBannerImg from '../images/services-banner.jpg'
import ServicesComponent from '../components/Services';
import CallToAction from '../components/CallToAction';
import Form from '../components/Form';

const Services = () => {
  return (
    <>
      <Banner bg={serviceBannerImg} title="Services We Offer" description="Explore Our Tailored Solutions for Your Online Presence. Elevate Your Brand with Our Web Design Expertise."/>
      <ServicesComponent />
      <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
      <Form />
    </>
  )
}

export default transition(Services)
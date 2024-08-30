import React from 'react'
import Banner from '../components/Banner'
import transition from '../components/transition'
import pricingBannerImg from '../images/pricing-banner.jpg'
import PricingComp from '../components/Pricing'
import { packagesCate } from '../content/pricing'

const Pricing = () => {
  return (
    <>
      <Banner bg={pricingBannerImg} title="Examine Our Offers" description="Select the Ideal Package for Your Requirements to Grow Your Company Right Now."/>
      <PricingComp data={packagesCate} hideDetLink={true} />
    </>
  )
}

export default transition(Pricing)

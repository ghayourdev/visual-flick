import React, { useEffect } from 'react'
// components
import transition from '../components/transition'
import HomeBanner from '../components/HomeBanner'
import Services from '../components/Services'
import RequestProposal from '../components/RequestProposal'
import Marquee from '../components/Marquee'
import ProjectsShowcase from '../components/ProjectsShowcase'
import Process from '../components/Process'
import CallToAction from '../components/CallToAction'
import FAQs from '../components/FAQs'
import Form from '../components/Form'
import Pricing from '../components/Pricing'
import { packagesCate } from '../content/pricing'
import { projectsCate } from '../content/projects'
import { customWebsiteServices } from '../content/services'

const Home = () => {
  useEffect(()=>{
    
  })
  return (
    <>
      <HomeBanner />
      <Services services={customWebsiteServices} />
      <RequestProposal />
      <Marquee />
      <ProjectsShowcase projects={projectsCate} />
      <Process />
      <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
      <Pricing data={packagesCate} />
      <Form />
      <FAQs />
    </>
  )
}

export default transition(Home)

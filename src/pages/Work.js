import React from 'react'
import transition from '../components/transition'
import Banner from '../components/Banner'
import workBannerImg from '../images/work-banner.jpg'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { projectsCate } from '../content/projects'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'

const Work = () => {
  return (
    <>
      <Banner bg={workBannerImg} title="Look into Our Work" description="Your Inner Vision Revealed: View Our Portfolio to See Our Canvas of Creative Brilliance"/>
      <ProjectsShowcase projects={projectsCate} hideDetLink={true} />
      <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
      <Form />
    </>
  )
}

export default transition(Work)

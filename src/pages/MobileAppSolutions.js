import React, { useEffect, useState } from 'react'
import transition from '../components/transition'
import ServiceBanner from './ServiceBanner'
import Services from '../components/Services'
import ServiceDescription from '../components/ServiceDescription'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { mobileApplicationProjects } from '../content/projects'
import Pricing from '../components/Pricing'
import { mobileAppPackages } from '../content/pricing'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
import { mobileAppServices } from '../content/services'

const MobileAppSolutions = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        setSlider([
            mobileApplicationProjects.slice(0, 5).map(item => item.fullImage),
            mobileApplicationProjects.slice(5, 10).map(item => item.fullImage)
        ])
    }, [])
    return (
        <>
            <ServiceBanner imgContain={true} title="Mobile Application Development" desc="With a long list of accomplishments, honors, and achievements under our belt, we provide extensible, high-performing, and user-friendly mobile solutions that help organizations future-proof their operations." slider={slider} />
            <ServiceDescription title="Contemporary, adaptable, and Extraordinary Mobile Application Development for Your Organization. We Designed Our Mobile Apps to Be Quick, Safe, and Easy to Use. The All-in-One store for anything you need related to mobile apps." paragraph={[
                `Vertualized offers full-service mobile app development. Whether you need design, coding, management, or integration services, we'll build your product from scratch into a fully functioning application that meets your expectations.`,
                `We begin by considering the goal. We go deeply to ensure that we comprehend your value proposition, user, and industry. The KPIs and measurements that direct our success are then defined. We work with you to produce a product that makes your users happy. We also assist you in creating a brand strategy that is grounded on competitive analysis, usability testing, and in-depth user research.`
            ]} />
            <Services services={mobileAppServices} />
            <ProjectsShowcase projects={mobileApplicationProjects} />
            <Pricing data={mobileAppPackages} />
            <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
            <Form />
        </>
    )
}

export default transition(MobileAppSolutions)

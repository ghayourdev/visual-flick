import React, { useEffect, useState } from 'react'
import transition from '../components/transition'
import ServiceBanner from './ServiceBanner'
import slide1_1 from '../images/projects/featured/1.webp'
import slide1_2 from '../images/projects/featured/2.webp'
import slide2_1 from '../images/projects/featured/3.webp'
import slide2_2 from '../images/projects/featured/4.webp'
import Services from '../components/Services'
import ServiceDescription from '../components/ServiceDescription'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { projects } from '../content/projects'
import Pricing from '../components/Pricing'
import { customWebsitePackages } from '../content/pricing'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
import { customWebsiteServices } from '../content/services'

const CustomWebsite = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        setSlider([
            [
                slide1_1,
                slide1_2
            ],
            [
                slide2_1,
                slide2_2
            ]
        ])
    }, [])
    return (
        <>
            <ServiceBanner title="Custom Website Development" desc="A wide range of web development services are offered by Vertualized to help you launch and grow your company." slider={slider} />
            <ServiceDescription title="To create a high-performing website, collaborate with our reputable personalized web development business. Make a digital experience that generates outcomes from interesting business websites to intricate animations." paragraph={[
                'Our prestigious professionals and qualified developers will assist you in creating your website from the ground up and expanding your online business. Explore our services for developing webssite.',
                `‍Custom end-to-end web development services are provided by Vertualized. We research your market and rivals to create a unique plan that is suited to your company's requirements. Then, with the goal of expanding your brand online, we create characteristics, capabilities, and designs. Collaborate with our professionals to obtain a customized website that is intended to boost traffic and conversions.`
            ]} />
            <Services services={customWebsiteServices} />
            <ProjectsShowcase projects={projects.slice(0,6)} />
            <Pricing data={customWebsitePackages} />
            <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
            <Form />
        </>
    )
}

export default transition(CustomWebsite)

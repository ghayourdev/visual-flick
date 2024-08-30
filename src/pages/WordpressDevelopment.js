import React, { useEffect, useState } from 'react'
import transition from '../components/transition'
import ServiceBanner from './ServiceBanner'
import Services from '../components/Services'
import ServiceDescription from '../components/ServiceDescription'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { wordpressProjects } from '../content/projects'
import Pricing from '../components/Pricing'
import { wordpressWebsitePackages } from '../content/pricing'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
import { wordpressWebsiteServices } from '../content/services'

const WordpressDevelopment = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        setSlider([
            wordpressProjects.slice(0, 6).map(item => item.fullImage),
            wordpressProjects.slice(6, 12).map(item => item.fullImage)
        ])
    }, [])
    return (
        <>
            <ServiceBanner title="Wordpress Website Development" desc="You may get expert assistance, scalable solutions, seamless user experience, and individualized solutions with our WordPress site development and design services. Explore the full online success potential of WordPress." slider={slider} />
            <ServiceDescription title="Boost conversions and safeguard your data by making improvements to the security and functionality of your WordPress website. For an internet business to succeed, you need a WordPress website that loads quickly and is safe. WordPress website performance and security are guaranteed from the beginning by Vertualized." paragraph={[
                'From the start, your WordPress website will be lightning fast and incredibly performant thanks to the expertise of our engineering team, giving your users a flawless experience and gaining you favor with search engines.',
                '‍Our group can create a WordPress website for your company that can easily manage heavy traffic loads without freezing. The outcome is a nicely navigable WordPress website that is quick and effective.'
            ]} />
            <Services services={wordpressWebsiteServices} />
            <ProjectsShowcase projects={wordpressProjects} />
            <Pricing data={wordpressWebsitePackages} />
            <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
            <Form />
        </>
    )
}

export default transition(WordpressDevelopment)

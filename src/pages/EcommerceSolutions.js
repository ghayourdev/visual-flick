import React, { useEffect, useState } from 'react'
import transition from '../components/transition'
import ServiceBanner from './ServiceBanner'
import Services from '../components/Services'
import ServiceDescription from '../components/ServiceDescription'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { ecommerceProjects } from '../content/projects'
import Pricing from '../components/Pricing'
import { ecommerceWebsitePackages } from '../content/pricing'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
import { ecommerceWebsiteServices } from '../content/services'

const EcommerceSolution = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        setSlider([
            ecommerceProjects.slice(0,3).map(item => item.fullImage),
            ecommerceProjects.slice(3,6).map(item => item.fullImage)
        ])
    }, [])
    return (
        <>
            <ServiceBanner title="Ecommerce Web/App Solutions" desc="The enterprise-grade, highly regarded Vertualized e-commerce platform has been solidly built to meet even the most exacting custom company needs. " slider={slider} />
            <ServiceDescription title="Discover the finest e-commerce software with integrated features. most potent electronic commerce solution Uploading your goods and services is simple and enjoyable, and it will be shown so that every buyer may participate in the sales process and help your online business expand." paragraph={[
                'Our proficiency in developing web applications for computers and mobile devices and designing e-commerce websites has given us an advantage over competitors. Providing online commerce solutions for small and large businesses, Vertualized has emerged as a prominent web development firm. Using a variety of platforms, such as WordPress, Shopify and others, our skilled web developers provide revolutionary solutions.'
            ]} />
            <Services services={ecommerceWebsiteServices} />
            <ProjectsShowcase projects={ecommerceProjects} />
            <Pricing data={ecommerceWebsitePackages} />
            <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
            <Form />
        </>
    )
}

export default transition(EcommerceSolution)

import React, { useEffect, useState } from 'react'
import transition from '../components/transition'
import ServiceBanner from './ServiceBanner'
import Services from '../components/Services'
import ServiceDescription from '../components/ServiceDescription'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { shopifyProjects } from '../content/projects'
import Pricing from '../components/Pricing'
import { shopifyAppPackages } from '../content/pricing'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
import { shopifyWebsiteServices } from '../content/services'

const ShopifyWebsite = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        setSlider([
            shopifyProjects.slice(0, 5).map(item => item.fullImage),
            shopifyProjects.slice(5, 10).map(item => item.fullImage)
        ])
    }, [])
    return (
        <>
            <ServiceBanner title="Shopify Website Development" desc="With our competent Shopify website design and development services, you can boost your revenue from the internet." slider={slider} />
            <ServiceDescription title="A Forward-thinking Shopify Website Design Company Providing Exceptionally Original Shopify Website Design Solutions" paragraph={[
                'As Shopify provides a plethora of advantages to retailers, companies of all sizes are shifting from physical storefronts to online spaces. Engage with our Shopify specialists to realize the full potential of this highly desirable eCommerce platform.',
                '‍We are a top Shopify eCommerce development firm that can help you create a versatile, feature-rich, and responsive online shop to help you stand out in the saturated eCommerce market.'
            ]} />
            <Services services={shopifyWebsiteServices} />
            <ProjectsShowcase projects={shopifyProjects} />
            <Pricing data={shopifyAppPackages} />
            <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
            <Form />
        </>
    )
}

export default transition(ShopifyWebsite)

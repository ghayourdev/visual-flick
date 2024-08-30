import React, { useEffect, useState } from 'react'
import transition from '../components/transition'
import ServiceBanner from './ServiceBanner'
import Services from '../components/Services'
import ServiceDescription from '../components/ServiceDescription'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { logoDesignProjects } from '../content/projects'
import Pricing from '../components/Pricing'
import { mobileAppPackages } from '../content/pricing'
import CallToAction from '../components/CallToAction'
import Form from '../components/Form'
import { logoDesignServices } from '../content/services'

const LogoDesign = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        setSlider([
            logoDesignProjects.slice(0, 6).map(item => item.fullImage),
            logoDesignProjects.slice(6, 12).map(item => item.fullImage)
        ])
    }, [])
    return (
        <>
            <ServiceBanner imgContain={true} title="Logo Designing" desc="Give your company a unique logo designed by our skilled logo designers. Your impression will endure longer if your logo is of higher quality." slider={slider} />
            <ServiceDescription title="Present Your Company with a Head-turning Logo Like Never Before: designs that are remarkable, distinctive, and one-of-a-kind" paragraph={[
                `We create logos using custom font, choosing colors and themes that complement the brand's intended greatness and vision. These components make up the foundation for creating a logo that will instantly make you stand out.`,
                '‍Imaginative components in a variety of color, logo with any necessary text or image, and a logo that works on several platforms. We have an expertise on logo that works great with themes of monochromatic colors.'
            ]} />
            <Services services={logoDesignServices} />
            <ProjectsShowcase projects={logoDesignProjects} />
            <Pricing data={mobileAppPackages} />
            <CallToAction title='Are You Prepared to Boost Your Online Image' subHeading="With the help of our knowledgeable web design team, turn your ideas into magnificent websites." paragraph="We will walk you through every stage of the process, from conception to launch." />
            <Form />
        </>
    )
}

export default transition(LogoDesign)

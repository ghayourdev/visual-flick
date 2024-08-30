import React, { useEffect } from 'react'
import { Row, Col } from 'antd'
import { Fancybox } from '@fancyapps/ui'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

const ProjectsShowcase = ({ projects, hideDetLink }) => {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);
    return (
        <>
            <section className="portfolio-section">
                <div className="container">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col className='text-center' lg={12} md={18} xs={24}>
                            <h2 className="theme-h2 bg-clip">Featured Projects</h2>
                            {
                                !hideDetLink ? <Link className='btn-light' to="/work">See All Work <HiMiniArrowUpRight /></Link>
                                    : <h4 className="theme-h4 text-black">Creating Incredible Websites from Perspectives</h4>}
                        </Col>
                    </Row>
                    {projects[0].key ? <>
                        <Tabs>
                            <TabList className="pricing-tabs">
                                {projects.map((cate, index) => {
                                    return (
                                        <>
                                            <Tab className="tab-item" key={index}>{cate.label}</Tab>
                                        </>
                                    )
                                })}
                            </TabList>
                            {projects.map((cate, index) => {
                                console.log('cate',cate)
                                return (
                                    <>
                                        <TabPanel key={index}>
                                            {/* <h3 className="theme-h3 text-black">{cate.title}</h3> */}
                                            <Row style={{ alignItems: 'stretch' }} gutter={[{ lg: 20, md: 15 }, { lg: 20, md: 15 }]}>
                                                {cate.projects.map((project, index) => {
                                                    return (
                                                        <Col key={index} lg={8} md={12} xs={24}>
                                                            <a className='project-item' data-fancybox="gallery" href={project.fullImage}>
                                                                <img className='img-fluid' src={project.thumbnail} alt={project.title} />
                                                            </a>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </TabPanel>
                                    </>
                                )
                            })}
                        </Tabs>
                    </> : <>
                        <Row gutter={[{ lg: 30, md: 20, xs: 0 }, { lg: 30, md: 20, xs: 15 }]}>
                            {projects.map((project, index) => {
                                return (
                                    <Col key={index} lg={8} md={12} xs={24}>
                                        <a className='project-item' data-fancybox="gallery" href={project.fullImage}>
                                            <img className='img-fluid' src={project.thumbnail} alt={project.title} />
                                        </a>
                                    </Col>
                                )
                            })}
                        </Row>
                    </>}
                </div>
            </section>
        </>
    )
}

export default ProjectsShowcase

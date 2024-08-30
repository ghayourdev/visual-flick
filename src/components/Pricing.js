import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PackageCard from './PackageCard';
const Pricing = ({ data }) => {
    return (
        <>
            <section className="pricing-sec">
                <div className="container">
                    <Row style={{ justifyContent: 'center' }}>
                        <Col lg={12} xs={24}>
                            <div className="text-center title-sec">
                                <h2 className="theme-h2 bg-clip">Pricing</h2>
                                <h4 className="theme-h4 text-black">Select the Ideal Strategy for Your Goals and Budget</h4>
                                <p className="theme-p text-black">We appreciate originality, but we also think that skill and creativity shouldn't come at a high cost, which is why we have packages at reasonable prices.</p>
                                <Link className='btn-light' to="/">See All Packages <HiMiniArrowUpRight /></Link>
                            </div>
                        </Col>
                        <Col lg={20} xs={24}>
                            {data[0].key ? <>
                                <Tabs>
                                    <TabList className="pricing-tabs">
                                        {data.map((cate, index) => {
                                            return (
                                                <>
                                                    <Tab className="tab-item" key={index}>{cate.label}</Tab>
                                                </>
                                            )
                                        })}
                                    </TabList>
                                    {data.map((cate, index) => {
                                        return (
                                            <>
                                                <TabPanel key={index}>
                                                    {/* <h3 className="theme-h3 text-black">{cate.title}</h3> */}
                                                    <Row style={{ alignItems: 'stretch' }} gutter={[{ lg: 20, md: 15 }, { lg: 20, md: 15 }]}>
                                                        {cate.packages.map((data, ind) => {
                                                            return (
                                                                <Col lg={8} md={12} xs={24} key={ind}>
                                                                    <PackageCard packageData={data} />
                                                                </Col>
                                                            )
                                                        })}
                                                    </Row>
                                                </TabPanel>
                                            </>
                                        )
                                    })}
                                </Tabs>
                            </> :
                                <>
                                    <Row style={{ alignItems: 'stretch', marginTop: 20 }} gutter={[{ lg: 20, md: 15 }, { lg: 20, md: 15 }]}>
                                        {data.map((pkg, ind) => {
                                            return (
                                                <Col lg={8} md={12} xs={24} key={ind}>
                                                    <PackageCard packageData={pkg} />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </>
                            }

                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Pricing

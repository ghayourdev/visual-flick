import React from 'react'

const Banner = ({ bg, title, description }) => {
    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 100%) ,url(${bg})` }} className="banner-inner">
                <div className="container">
                    <h1 className="theme-h2 cursor-picture">{title}</h1>
                    <h4 className="theme-h4">{description}</h4>
                </div>
            </section>
        </>
    )
}

export default Banner

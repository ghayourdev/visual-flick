import React from 'react'

const ServiceDescription = ({ title, paragraph }) => {
    return (
        <>
            <section class="service-desc">
                <div className="container">
                    <h3 className="theme-h3 text-black">{title}</h3>
                    {paragraph.map((p, i) => {
                        return (
                            <p className='theme-p' key={i}>{p}</p>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ServiceDescription

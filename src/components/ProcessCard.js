import React from 'react'

const ProcessCard = ({process}) => {
  return (
    <div className='process-card'>
      <div className="head">
        <img src={process.icon} alt={process.title} />
        <h4 className="theme-h4">{process.title}</h4>
      </div>
      <p className="theme-p">{process.paragraph}</p>
    </div>
  )
}

export default ProcessCard

import React, { useContext } from 'react'
import { PopupContext } from '../context/PopupState';
import parse from 'html-react-parser';
const PackageCard = ({ packageData }) => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    return (
        <div className='package-card'>
            <div className="card-head">
                <div className="pkg-title">
                    <h4 className="theme-h4">{packageData.title}</h4>
                    <h5 className="theme-h5">{packageData.featuresHeading}</h5>
                </div>
                <div className="pkg-pricing">
                    <strong>${packageData.price}</strong>
                    <span>original price: <del>${packageData.originalPrice}</del></span>
                </div>
            </div>
            <ul className="features">
                {packageData.featuresList.map((feature, index) => {
                    return (
                        <li key={index}>{parse(feature)}</li>
                    )
                })}
            </ul>
            <button onClick={()=>{setOpenPopup(!openPopup)}} className='pkg-btn'>{packageData.btnText}</button>
        </div>
    )
}

export default PackageCard

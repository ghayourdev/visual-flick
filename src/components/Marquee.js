import React from 'react'
import { brands } from '../content/brands'

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

const MarqueeElements = () => {
    const shuffleBrands = shuffleArray(brands)
    return (
        <>
            {shuffleBrands.map((brand, index) => {
                return (
                    <li key={index}>
                        <img src={brand.icon} alt={brand.title} />
                        <span>{brand.title}</span>
                    </li>
                )
            })}
        </>
    )
}

const MarqueeItem = () => {
    return (
        <ul className='maqruee-brands'>
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
            <MarqueeElements />
        </ul>
    )
}

const Marquee = () => {
    return (
        <>
            <section className='marquee'>
                <div className="marquee-animation animate-left">
                    <MarqueeItem />
                </div>
                <div className="marquee-animation animate-right">
                    <MarqueeItem />
                </div>
                <div className="marquee-animation animate-left">
                    <MarqueeItem />
                </div>
            </section>
        </>
    )
}

export default Marquee

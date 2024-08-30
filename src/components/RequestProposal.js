import React, { useEffect, useRef, useContext } from 'react'
import { PopupContext } from '../context/PopupState';
import absoluteImg1 from '../images/request-proposal/front-1.webp'
import absoluteImg2 from '../images/request-proposal/back-1.webp'
import absoluteImg3 from '../images/request-proposal/back-2.webp'
import absoluteImg4 from '../images/request-proposal/front-3.webp'
import absoluteImg5 from '../images/request-proposal/back-3.webp'
import absoluteImg6 from '../images/request-proposal/back-4.webp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const RequestProposal = () => {
    const { openPopup, setOpenPopup } = useContext(PopupContext)
    const figRef1 = useRef(null)
  const figRef2 = useRef(null)
  const figRef3 = useRef(null)
  const figRef4 = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    // Define GSAP animation
    gsap.fromTo(figRef1.current,{
      x: '0%',
      y: '0%'
    }, {
      x: '-50%',
      y: '-50%',
      duration: 0.5,
      scrollTrigger: {
        trigger: figRef1.current,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true,
      }
    });    
    gsap.fromTo(figRef2.current,{
      x: '0%',
      y: '0%'
    }, {
      x: '50%',
      y: '-50%',
      duration: 0.5,
      scrollTrigger: {
        trigger: figRef2.current,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true,
      }
    });
    gsap.fromTo(figRef3.current,{
      x: '0%',
      y: '0%'
    }, {
      x: '-50%',
      y: '50%',
      duration: 0.5,
      scrollTrigger: {
        trigger: figRef3.current,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true,
      }
    });    
    gsap.fromTo(figRef4.current,{
      x: '0%',
      y: '0%'
    }, {
      x: '50%',
      y: '50%',
      duration: 0.5,
      scrollTrigger: {
        trigger: figRef4.current,
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true,
      }
    });    
  }, [])

  return (
    <>
      <section className='request-proposal'>
        <div ref={figRef1} className="img-absolute img-absolute-1">
          <figure>
            <img src={absoluteImg1} alt="" />
            <img src={absoluteImg2} alt="" />
          </figure>
        </div>
        <div ref={figRef2} className="img-absolute img-absolute-2">
          <figure>
            <img src={absoluteImg2} alt="" />
            <img src={absoluteImg3} alt="" />
          </figure>
        </div>
        <div ref={figRef3} className="img-absolute img-absolute-3">
          <figure>
            <img src={absoluteImg4} alt="" />
            <img src={absoluteImg5} alt="" />
          </figure>
        </div>
        <div ref={figRef4} className="img-absolute img-absolute-4">
          <figure>
            <img src={absoluteImg3} alt="" />
            <img src={absoluteImg6} alt="" />
          </figure>
        </div>
        <div className="container">
          <h3 className="theme-h3 text-black">Request a Proposal</h3>
          <p className="theme-p">We would love to help you with all the marketing power we have.</p>
          <button className='request-btn' onClick={()=>{setOpenPopup(!openPopup)}}>
            <span></span>
            <span></span>
            <span></span>
            Request a Proposal
          </button>
        </div>
      </section>
    </>
  )
}

export default RequestProposal

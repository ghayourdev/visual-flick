import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import cursorVideoMp4 from '../videos/cursor.mp4'
import cursorVideoWebm from '../videos/cursor.webm'

const Cursor = () => {
  const [showCursorVideo, setShowCursorVideo] = useState(false)
  const videoRef = useRef(null)
  const cursor = useRef(null)
  const clickableElements = 'a,button,input,textarea,select'
  useEffect(() => {
    const followMouse = (e) => {
      if ($(e.target).hasClass('cursor-picture') || $(e.target).parents().hasClass('cursor-picture')) {
        setShowCursorVideo(true)
        $(cursor.current).css({ transform: `translate(-50%,-50%) scale(1)` })
      } else if (e.target.matches(clickableElements) || $(e.target).parents().is(clickableElements)) {
        $(cursor.current).css({ transform: `translate(-50%,-50%) scale(0.2)` })
        setShowCursorVideo(false)
      } else {
        setShowCursorVideo(false)
        $(cursor.current).css({ transform: `translate(-50%,-50%) scale(0.05)` })
      }
      $(cursor.current).css({ top: e.clientY, left: e.clientX })
    }
    window.addEventListener('mousemove', followMouse)
    return () => {
      window.removeEventListener('mousemove', followMouse)
    }
  }, [])
  return (
    <>
      <div ref={cursor} className="cursor">
        {showCursorVideo ? <video ref={videoRef} autoPlay loop muted>
          <source src={cursorVideoWebm} type="video/webm" />
          <source src={cursorVideoMp4} type="video/mp4" />
        </video> : <></>}
      </div>
    </>
  )
}

export default Cursor

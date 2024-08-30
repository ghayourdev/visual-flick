import { motion } from 'framer-motion'
import logo from '../images/logo.png'

const transition = (Component) => {
    return () => (
        <>
            <Component />
            <motion.div
                className='slide-in'
                initial={{ translateY: '-100%' }} // Initial position above the screen
                animate={{ translateY: '-100%' }} // Move to the visible area
                exit={{ translateY: '0' }} // Move back above the screen on exit
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="position-relative">
                    {/* <div className="home-hero-gradient-background">
                        <div className="home-hero-blue-bulb"></div>
                    </div> */}
                    <img src={logo} alt="" />
                </div>
            </motion.div>

            <motion.div
                className='slide-out'
                initial={{ translateY: '0%' }} // Initial position at the visible area
                animate={{ translateY: '-100%' }} // Move back above the screen on animate
                exit={{ translateY: '0%' }} // Move to the visible area on exit
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="position-relative">
                    {/* <div className="home-hero-gradient-background">
                        <div className="home-hero-blue-bulb"></div>
                    </div> */}
                    <img src={logo} alt="" />
                </div>
            </motion.div>
        </>
    )
}

export default transition;

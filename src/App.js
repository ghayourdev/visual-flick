import React, { useState, useEffect } from 'react'
import './App.css';
import 'swiper/css';
// dependencies
import { Route, Routes, useLocation } from 'react-router-dom'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { AnimatePresence } from 'framer-motion'
// import AnimatedCursor from "react-animated-cursor"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Thankyou from './pages/Thankyou';
// components
import Header from './components/Header';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import CustomWebsite from './pages/CustomWebsite';
import Popup from './components/Popup';
import WordpressDevelopment from './pages/WordpressDevelopment';
import ShopifyWebsite from './pages/ShopifyWebsite';
import EcommerceSolutions from './pages/EcommerceSolutions';
import MobileAppSolutions from './pages/MobileAppSolutions';
import LogoDesign from './pages/LogoDesign';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  const [isTouchable, setIsTouchable] = useState(false);
  const location = useLocation()
  useEffect(() => {
    setIsTouchable('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return (
    <>
      {!isTouchable ? <Cursor /> : <></>}
      <Header />
      <main>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/custom-website' element={<CustomWebsite />} />
            <Route path='/wordpress-development' element={<WordpressDevelopment />} />
            <Route path='/shopify-website' element={<ShopifyWebsite />} />
            <Route path='/ecommerce-solutions' element={<EcommerceSolutions />} />
            <Route path='/mobile-app-solutions' element={<MobileAppSolutions />} />
            <Route path='/logo-design' element={<LogoDesign />} />
            <Route path='/terms-conditions' element={<TermsConditions />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/thankyou' element={<Thankyou />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Popup />
      <TawkMessengerReact
        propertyId="65f5c9969317c543712898d2"
        widgetId="1hp41mtnt"
      />
      <Footer />
    </>
  )
}

export default App

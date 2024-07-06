import React from 'react'
import HeroBanner from './HeroBanner'
import About from './About'
import Blog from './blog'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Work from './Work'
import PicSection from './PicSection'
import Features from './Features'
import Navbar from './Navbar'
import './LandingPage.css'
function LandingPage() {
  return (
    <>
      <div style={{height:'3791px'}} className='main-landanding '>
      <Navbar/>
      <HeroBanner/>
      <Features/>
        <Work />
        <PicSection />
        <About />
        <Blog />
        < Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
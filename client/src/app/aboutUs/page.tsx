import React from 'react'
// import AboutUs from '@/components/otherPages/AboutUs'
import Navbar from '@/components/landingPage/Navbar'
import Footer from '@/components/landingPage/Footer'
import AboutUs2 from '@/components/otherPages/AboutUs2'

function page() {
  return (
    <div>
        <Navbar />
        {/* <AboutUs /> */}
        <AboutUs2 />
        <Footer />
    </div>
  )
}

export default page
import React from 'react'
import AboutUs from '@/components/otherPages/AboutUs'
import Navbar from '@/components/landingPage/Navbar'
import Footer from '@/components/landingPage/Footer'

function page() {
  return (
    <div>
        <Navbar />
        <AboutUs />
        <Footer />
    </div>
  )
}

export default page
import React from 'react'
import Navbar from '@/components/landingPage/Navbar'
import Footer from '@/components/landingPage/Footer'   
import Contact from '@/components/landingPage/Contact' 

function page() {
  return (
    <div>
      <Navbar />
            <h1>Contact Us</h1>
                  <h1 className='mb-15'>Contact Us</h1>
                      
      <Contact />

      <Footer />
    </div>
  )
}

export default page
import React from 'react'
import OurValues from '../components/OurValues/OurValues'
import OurStory from '../components/OurStory'
import ClientReview from '../components/clientReviews'
import OurImpact from '../components/OurImpact'

const AboutUs = () => {
  return (
    <div className='bg-white'>
        <OurValues/>
        <OurStory/>
        <ClientReview/>
        <OurImpact/>
    </div>
  )
}

export default AboutUs
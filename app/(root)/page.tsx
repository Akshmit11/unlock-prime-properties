import PrimePropertyFilter from '@/components/shared/PrimePropertyFilter'
import HeroSection from '@/components/shared/HeroSection'
import OurServices from '@/components/shared/OurServices'
import WhyChooseUs from '@/components/shared/WhyChooseUs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PrimePropertyFilter />
      <OurServices />
      {/* <WhyChooseUs /> */}
    </div>
  )
}

export default HomePage
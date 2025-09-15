import Achievments from '@/components/About/Achievments'
import Education from '@/components/About/Education'
import Founders from '@/components/About/Founders'
import Hero from '@/components/About/Hero'
import MeetTeam from '@/components/About/MeetTeam'
import TextSection from '@/components/About/TextSection'
import Vision from '@/components/About/Vision'
import AccordionHome from '@/components/Home/AccordionHome'
import React from 'react'

const page = () => {
  return (
    <div>
        <section className="overflow-hidden">
              <Hero />
              <Education/>
              <TextSection/>
              <Vision/>
              <Founders/>
              <Achievments/>
              <MeetTeam/>
              <AccordionHome/>
            </section>
    </div>
  )
}

export default page
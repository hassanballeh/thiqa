import Hero from '@/components/BecomeATutor/BecomePageTwo/Hero'
import Honors from '@/components/BecomeATutor/BecomePageTwo/Honors'
import Numbers from '@/components/BecomeATutor/BecomePageTwo/Numbers'
import Question from '@/components/BecomeATutor/BecomePageTwo/Question'
import Rewards from '@/components/BecomeATutor/BecomePageTwo/Rewords'
import Steps from '@/components/BecomeATutor/BecomePageTwo/Steps'
import Support from '@/components/BecomeATutor/BecomePageTwo/Support'
import Time from '@/components/BecomeATutor/BecomePageTwo/Time'
import React from 'react'

const page = () => {
  return (
    <div>
        <section className="overflow-hidden">
              <Hero />
              <Numbers/>
              <Steps/>
              <Time/>
              <Rewards/>
              <Support/>
              <Honors/>
              <Question/>
            </section>
    </div>
  )
}

export default page
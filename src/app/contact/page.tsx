import Hero from '@/components/Contact/Hero'
import Member from '@/components/Contact/Member'
import Question from '@/components/Contact/Question'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
<Member/>
             <Question/>

    </div>  )
}

export default page
import BookForm from '@/components/Shadow/BookForm'
import Grades from '@/components/Shadow/Grades'
import Hero from '@/components/Shadow/Hero'
import Packages from '@/components/Shadow/Packages'
import Question from '@/components/Shadow/Question'
import Shadow from '@/components/Shadow/Shadow'
import Steps from '@/components/Shadow/Steps'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Shadow/>
             <Grades/>
             <Packages/>
             <Steps/>
             <div id="shadow-form">
  <BookForm />
</div> 
             <Question/>

    </div>  )
}

export default page
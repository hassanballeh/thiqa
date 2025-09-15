import React from 'react'
import ReportTrail from '@/components/Forms/ReportTrail'

const page = () => {
  return (
   <div className='bg-white py-16 '>
    <section className="container mx-auto ">
<div className=" flex-1 md:px-4 text-center md:text-start flex flex-col justify-center ">
<h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight font-roboto">
Report Trail Form
</h2>
</div>
<ReportTrail/>

</section>

    </div> 
     )
}

export default page
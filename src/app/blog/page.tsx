import BetweenTrend from '@/components/Blog/BetweenTrend'
import Hero from '@/components/Blog/Hero'
import Trending from '@/components/Blog/Trending'
import TrendingTwo from '@/components/Blog/TrendingTwo'
import React from 'react'

const page = () => {
  return (
    <div>
        <section className="overflow-hidden">
              <Hero />
              <Trending/>
              <BetweenTrend/>
              <TrendingTwo/>
            </section>
    </div>
  )
}

export default page
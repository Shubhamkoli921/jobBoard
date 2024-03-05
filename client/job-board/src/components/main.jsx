import React from 'react'
import Navbar from './navbar/navbar'
import JobDash from './jobDash/jobdash'

const Main = () => {
  return (
    <>
      <div className="w-full h-full bg-black" >
        <div className="h-full bg-black text-white ">
          {/* navbar section */}
          <Navbar />
          <JobDash />
          
        </div>
      </div>
    </>
  )
}

export default Main
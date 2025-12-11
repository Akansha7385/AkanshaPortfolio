import React from 'react'
import Nav from './Nav'

const Education = () => {
  return (
      <div className="w-full flex flex-col items-center">
      <Nav />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10 text-center inline-block">Education</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow w-full">
        
        <div className="flex items-center gap-3 mb-2">
            <h1 className="text-xl font-semibold p-4">B.Tech(CSE)</h1>
          <p className="text-slate-700 ml-210">(August 2021-May-2025)</p>
        </div>

       <div className='flex items-center gap-3 mb-2 pl-4'>
         <p className="text-black font-bold">
         Uttaranchal University
        </p>
        <span className="text-slate-700">(Premnagar, Dehradun, Uttarakhand)</span>
       </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow w-full mt-4">
        
        <div className="flex items-center gap-3 mb-2">
            <h1 className="text-xl font-semibold p-4">Intermediate</h1>
          <p className="text-slate-700 ml-210">(April 2020-March 2021)</p>
        </div>

       <div className='flex items-center gap-3 mb-2 pl-4'>
         <p className="text-black font-bold">
         Glacier Public School
        </p>
        <span className="text-slate-700">(Dehradun, Uttarakhand, India)</span>
       </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow w-full mt-4">
        
        <div className="flex items-center gap-3 mb-2">
            <h1 className="text-xl font-semibold p-4">High School</h1>
          <p className="text-slate-700 ml-210">(April 2018-March 2019)</p>
        </div>

       <div className='flex items-center gap-3 mb-2 pl-4'>
         <p className="text-black font-bold">
         Glacier Public School
        </p>
        <span className="text-slate-700">(Dehradun, Uttarakhand, India)</span>
       </div>
      </div>
    </div>
  )
}

export default Education
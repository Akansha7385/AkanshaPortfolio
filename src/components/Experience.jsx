import React from 'react'
import Nav from './nav'

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10 text-center inline-block">Experience</h1>
      </div>

      <div className="bg-white p-4 rounded-xl shadow w-full">
        
        <div className="flex items-center gap-3 mb-2">
          <img
            className="h-10 w-10 rounded"
            src="https://media.licdn.com/dms/image/v2/D560BAQGViLiF-0K7zg/company-logo_200_200/company-logo_200_200/0/1682228217364/12thwonder_logo?e=2147483647&v=beta&t=yhUWG0yvKpXV-1I9ScqFpAEIcIYr3e5_B0EIISM9LzA"
            alt="company logo"
          />
          <a href="https://12thwonder.com/" target="_blank" rel="noreferrer">
            <h1 className="text-xl font-semibold">12th Wonder</h1>
          </a>
          <p className="text-slate-700 ml-210">(April 2025-Present)</p>
        </div>

        <p className="text-slate-700">
         At 12th Wonder, I worked on building and improving several production-level web pages using React.js. During my time there, I strengthened my skills in Angular, Tailwind CSS, and modern frontend development practices.
I contributed to key projects such as Dean Japan/JP Logistics, where I focused on creating efficient UI components, improving responsiveness, and enhancing user experience.
        </p>
      </div>
    </div>
  )
}

export default Experience

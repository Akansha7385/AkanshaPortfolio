import React from 'react'

const Nav = () => {
  return (
    <div className='h-8'>
      <nav>
        <ul class="flex-col gap-4 absolute left-0 top-full w-full bg-white p-4 shadow-lg lg:shadow-none lg:p-0 lg:bg-transparent lg:flex lg:static lg:flex-row lg:gap-10 text-2xl font-semibold">
        <li><a href="/" class="hover:text-blue-600">Home</a></li>
        <li><a href="/project" class="hover:text-blue-600">Project</a></li>
        <li><a href="/experience" class="hover:text-blue-600">Experience</a></li>
        <li><a href="/education" class="hover:text-blue-600">Education</a></li>
        <li><a href="https://drive.google.com/file/d/1QdWBuFssuSa5TgcOzH9PymYJkWu4CMeQ/view?usp=drivesdk" class="hover:text-blue-600">Resume</a></li>

      
      </ul>
      </nav>
    </div>
  )
}

export default Nav

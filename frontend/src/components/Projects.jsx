import React from 'react'

function Projects() {
  return (
    <div className='flex flex-col px-6'>
      <div className='flex justify-center items-center flex-wrap'>
        {Array(6).fill().map((card,i)=><div>Card</div>)}
      </div>
    </div>
  )
}
const ProjectCard=((card)=>(
    <div className='rounded-lg shadow-lg bg-white'></div>
))
export default Projects

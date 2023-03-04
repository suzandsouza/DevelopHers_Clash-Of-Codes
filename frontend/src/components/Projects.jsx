import React from 'react'
import { Link } from 'react-router-dom'
import Identicons from 'react-identicons'

const Projects=() => {
  return (
    <div className='flex flex-col px-6'>
      <div className='flex justify-center items-center flex-wrap'>
        {Array(6).fill().map((card,i)=>(<ProjectCard key={i}/>))}
      </div>
    </div>
  )
}
const ProjectCard=({card, id})=>(
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
        <Link to={"/projects/" + id}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGfj1Q5Pptp1KEePiW1GwtXi44wRoIb2T6g&usqp=CAU" alt="lender" className='rounded-xl h-64 w-full object-cover' />
        </Link>
        <div className='p-4'>
        <h5>Lending some money so that I earn more!</h5>
            <div >
                <div>
                    <Identicons className="rounded-full shadow-md" string="0x15...1ea2 " size={15}/>
                </div>
            </div>
        </div>
    </div>
)
export default Projects

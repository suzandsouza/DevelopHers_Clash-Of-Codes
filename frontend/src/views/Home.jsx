import React from 'react'
import Hero from '../components/Hero'
import {Route,Routes} from 'react-router-dom'
import Projects from '../components/Projects'
import CreateProject from '../components/CreateProject'
import AddButton from '../components/AddButton'
import UpdateProjects from '../components/UpdateProject'
function Home() {
  return (
    <>
        <Hero />
        <Projects/>
        <div className='flex justify-center items-center my-5'>
          <button type="button" className='inline-bloc px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700'>
            Load More
          </button>
        </div>
        <CreateProject />
        
        <AddButton />
    </>
  )
}

export default Home

import React from 'react'
import home_page from '../images/home_page.jpg'
function Hero() {
   // const[stats]=useGlobalState('stats')
  return (
    <div className='text-center bg-white text-gray-800 py-24 px-6'>
    <figure className='md:flex white-100 rounded-xl p-8 md:p-0 dark:bg-white-800'>
    <img className='' src={home_page} alt="home-page"/>
     <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-0 mt-12'> 
        <span className='capitalize'>
        Decentralizing your Banking Experience
        <br />
        <br />
        <span className='uppercase text-blue-600'> DevHers</span>
        <br />
        <br/>
        <div className='flex justify-center items-center space-x-2'>
        <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-blue-700'>Lend Your Money</button>
        
        <button type='button' className='inline-block px-6 py-2.5 border border-blue-600
        font-medium text-lg leading-tight uppercase text-blue-600
        rounded-full shadow-md bg-transparent hover:bg-blue-700
        hover:text-white'>Borrow From Lenders</button>
        </div>
        </span>
        
     </h1>
    </figure>
    

    <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {0}
          </span>
          <span>Projects</span>
        </div>

        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {0} ETH
          </span>
          <span>Donated</span>
        </div>
        </div>
    </div>
     
  )
}

export default Hero

import React from 'react'

function Hero() {
   // const[stats]=useGlobalState('stats')
  return (
    <div className='text-center bg-white text-gray-800 py-24 px-6'>
     <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-12'> 
        <span className='capitalize'>
        Decentralizing your Banking Experience
        <br />
        <span className='uppercase text-green-600'> DevHers</span>
            <br />
          
        </span>
        
     </h1>
     <div className='flex justify-center items-center space-x-2'>
        <button type='button' className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700'>Login</button>
        
        <button type='button' className='"inline-block px-6 py-2.5 border border-green-600
        font-medium text-xs leading-tight uppercase text-green-600
        rounded-full shadow-md bg-transparent hover:bg-green-700
        hover:text-white'>Signup</button>
     </div>
     <div className='flex justify-center items-center mt-10'>
        <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className='text-lg font-bold text-green-900 leading-5'>
                {0}
            </span>
            <span>Arts</span>

        </div>
        <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className='text-lg font-bold text-green-900 leading-5'>
                {0}
            </span>
            <span>Backing</span>

        </div>
        <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className='text-lg font-bold text-green-900 leading-5'>
                {0} ETH
            </span>
            <span>Funding</span>

        </div>
     </div>
    </div>
  )
}

export default Hero

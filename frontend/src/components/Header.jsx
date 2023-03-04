import React from 'react'
import { Link } from 'react-router-dom'
import { BsBank } from 'react-icons/bs'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0'>
    <Link to="/" className='flex justify-start items-center text-xl text-black space-x-1'><span> Team Develophers</span><BsBank /></Link>
     
        <div className='flex space-x-2 justify-center'>
        <button type='button' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700'>Connect Wallet</button>
        
     </div>
    </header>
  )
}

export default Header

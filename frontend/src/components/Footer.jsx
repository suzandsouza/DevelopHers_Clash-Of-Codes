import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-centre">© 2023 <a href="" class="hover:underline">Made with 💙 - DevelopHers</a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Github</a>
            </li>
        </ul>
    </footer>
    </div>
  )
}

export default Footer
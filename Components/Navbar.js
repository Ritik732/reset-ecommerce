import React from 'react'
import Link from 'next/link'
import { Carter_One } from '@next/font/google'

function Navbar({cart}) {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/"><p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className="w-20" src="https://images.tarkai.com/RESET_Emailer/RESET_Logo_stripo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672288621574" alt=" " />
        
      </p> </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/Shop"><p className="mr-5 hover:text-gray-900">Shop</p></Link>
        <Link href="/Ingredients "><p className="mr-5 hover:text-gray-900">Ingredients</p></Link>
        < Link href="/Science"><p className="mr-5 hover:text-gray-900">Science</p></Link>
        <Link href="/Resources "><p className="mr-5 hover:text-gray-900">Resources</p></Link>
        <Link href="/Track "><p className="mr-5 hover:text-gray-900">Track</p></Link>
        <Link href="/checkout "><p className="mr-5 hover:text-gray-900">Cart({cart.length})</p></Link>
        {/* <Link href="/contact "><p className="mr-5 hover:text-gray-900">Contact</p></Link> */}
      </nav>
      
     <Link href="/login"><button className=" text-white bg-indigo-500 border-0 py-2 md:py-2 px-4 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sg mr-5">Login</button></Link>
    </div>
  </header>
  )
}

export default Navbar 
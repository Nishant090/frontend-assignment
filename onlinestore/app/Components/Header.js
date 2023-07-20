import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <header className="text-gray-600 body-font p-1 shadow-sm">
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center md:pr-10 lg:mt-3">
        
      <Link href="/"><img src='logo.png' className='absolute  left-[10vmax] top-[6vmax] p-8 w-64 md:p-1 md:w-80 md:top-[-1vmax] cursor-pointer'/></Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:pr-9">
       <Link href="/" className=" mr-5  md:mr-11  cursor-pointer text-black   font-roboto hover:hover:border-b-2 border-orange-700">Home</Link>
       <Link href="/about" className=" mr-5  md:mr-11 cursor-pointer  text-black font-roboto hover:hover:border-b-2 border-orange-700">About</Link>
       <Link href="/products" className=" mr-5  md:mr-11 cursor-pointer text-black  font-roboto hover:hover:border-b-2 border-orange-700">Products</Link>
       <Link href="/search" className=" mr-5  md:mr-11 cursor-pointer text-black  font-roboto hover:hover:border-b-2 border-orange-700">Search</Link>
       
      
      </nav>
     <Link href={"/login"}><button className="inline-flex items-center bg-orange-700  text-white border-0 py-1 px-3 focus:outline-none hover:bg-orange-800 rounded-lg  text-base mt-4 md:mt-0 ">Log In
      </button></Link>
    </div>
  </header> 
  )
}

export default navbar  
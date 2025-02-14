import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-2'>WELCOME TO MY WEBSITE</p> 
        <h1 className='md:text-7xl sm:text-6xl text-4xl'>I am Sanskar K.c</h1>
        <div className='flex justify-center items-center pt-5'>
          <p className='md:text-5xl sm:text-3xl text-l'>Specialized in</p>
          <ReactTyped className='md:text-5xl sm:text-3xl text-l pl-4 text-[#00df9a]' strings={['UI/UX','Full-Stack','AI automation','Digital Marketting']} typeSpeed={140} backSpeed={50} loop/>
        </div>
        <p className='md:text-xl text-l font-bold text-gray-500 mt-5'>Scroll down to view my full portfolio</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero

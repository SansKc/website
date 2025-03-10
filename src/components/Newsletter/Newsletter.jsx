import { useState } from 'react'
import Modal from '../Model/Modal'

function Newsletter() {
  const [showModal,setShowModal]=useState(false)
  return (
    
    <div className='w-full py-16 text-white px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          Want tips & tricks to optimize your project?
        </h1>
        <p>Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input
            className='p-3 flex w-full rounded-md text-white hover:cursor-auto'
            type='email'
            placeholder='Enter Email'
          />
           <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-xl font-semibold text-gray-900 mb-5 pt-3 px-2">
          Text Modal
        </h3>
        <p className="text-gray-800 px-2 py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Modal>
          <button className='bg-[#00df9a] hover:bg-[#87ffd9]  text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-2'
          onClick={()=>{setShowModal(true)}}>
            Notify Me
          </button>
        </div>
        <p>
          We care bout the protection of your data. Read our{' '}
          <span className='text-[#00df9a]'>Privacy Policy.</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Newsletter

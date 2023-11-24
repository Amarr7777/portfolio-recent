import React from 'react'
import Nav from '../components/Nav'

function Home() {
  return (
    <>
    <Nav/>
    <div className='my-5 mx-32'>
      <h6 className='font-semibold text-gray-900'>
      Hello! I'm Amar.
      </h6>
      <h4 className='text-black text-8xl font-bold my-3 space-y-2'>
      Code with Confidence, Design with Purpose. <br /> <span className='text-gray-500'>Your Web, Your Way.</span> 
      </h4>
      <button className='bg-black text-white rounded-full py-2 px-3 my-2'>
        Let's Talk
      </button>
    </div>
    </>
  )
}

export default Home
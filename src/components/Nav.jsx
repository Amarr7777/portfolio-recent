import React from 'react'
import { ArrowRight } from 'react-feather'

function Nav() {
  return (
    <nav className='flex items-center justify-between w-full p-5  '>
      <p><span className='text-gray-500'>Show</span>casy</p>

      <button className='flex  items-center justify-between text-black  shadow-lg border border-black rounded-full py-1 px-2 '>
        Let's Talk
        <ArrowRight size={20}/>
      </button>
    </nav>
  )
}

export default Nav
import React from 'react'
import FormTop from './FormTop'
import FormMain from './FormMain'

const LoginForm = () => {
  return (
    <div className='flex flex-col gap-2 w-100 mt-5 bg-white rounded-lg '>
         <FormTop/>
         <FormMain/>
         <button className='bg-white text-black border border-gray-300 cursor-pointer py-2 rounded-md active:scale-95 hover:bg-gray-100'>Login as teacher</button>
    </div>
  )
}

export default LoginForm

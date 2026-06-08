import React from 'react'
import FormTop from './FormTop'
import FormMain from './FormMain'

const LoginForm = () => {
  return (
    <div className='flex flex-col gap-2 w-96 p-6 bg-white rounded-lg shadow-md'>
         <FormTop/>
         <FormMain/>
    </div>
  )
}

export default LoginForm

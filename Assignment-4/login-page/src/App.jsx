import React from 'react'
import Header from './Component/Header'
import LoginForm from './Component/LoginForm'


const App = () => {
  return (
    <div className='flex flex-col items-center h-screen bg-gray-100'>
      <Header/>
      <LoginForm/>
    </div>
  )
}

export default App

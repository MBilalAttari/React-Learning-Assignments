import React from 'react'
import LoginOrSignUpCard from '../Components/LoginOrSignUpCard'
import bgImg from "../assets/loginBg.png"

const LoginPage = () => {
  return (
    <div className='h-screen relative flex items-center justify-center'>
        <img src={bgImg} alt="Wheather Bg" className='absolute top-0 left-0 h-screen w-screen z-[-1] '  />
      <LoginOrSignUpCard />
    </div>
  )
}

export default LoginPage

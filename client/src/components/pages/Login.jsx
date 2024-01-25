import React from 'react'

const Login = () => {
  return (
    <div className='p-4 py-6  '>
      <h1 className='text-4xl text-center w-full py-4'>Login</h1>
      <form className='mt-2 max-w-md mx-auto'>
        <input type="email" placeholder='example@email.com' />
        <input type="password" placeholder='password' />
        <button className='primary border-2 border-black rounded-2xl py-2 px-3 my-2 w-full
        shadow-md shadow-gray-300 hover:scale-x-90 shadow-lg transition duration-300 ease-in-out'>Login</button>
      </form>
    </div>
  )
}

export default Login
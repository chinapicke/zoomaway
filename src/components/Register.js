import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Register({closeRegisteration}) {

  const [ registerEmail, setRegisterEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  const registerForm = (e) => {
    e.preventDefault()
    setRegisterEmail('')
    setPassword('')
    setConfirmPassword('')
    closeRegisteration()
  }

  const emailSignup = (e) => {
    setRegisterEmail(e.target.value)
  }
  const passwordSignup = (e) => {
    setPassword(e.target.value)
  }
  const confirmSignup = (e) => {
    setConfirmPassword(e.target.value)
  }

  const passwordError = password !== confirmPassword

  const registerValidation = () => {
    return passwordError
  }

  return (
    <div className=" registerPopup overflow-auto w-full fixed inset-0 outline-none focus:outline-none bg-gray-900 bg-opacity-50 z-10"
    onClick={()=>closeRegisteration(false)}>
      <div className=" registerInner rounded-md relative w-auto my-8 mx-auto max-w-sm "
        onClick={(e) => e.stopPropagation()}>
        <div className="registerTemplate border-0 rounded shadow-lg relative flex flex-col w-full bg-blue outline-none focus:outline-none">
          <div className="registerInsideContent flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded">
            <button className='flex justify-end'onClick={()=>closeRegisteration(false)}>
              <FontAwesomeIcon icon={faXmark} style={{color:'white'}} size='lg'/>
            </button>
          </div>
          <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white pt-3 text-center">Sign in to our platform</h3>
            <div>
              <label for="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
              <input type="email" name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required=""
                value={registerEmail}
                onChange={emailSignup}
              />
            </div>
            <div>
              <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
              <input type="password" name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                value={password}
                onChange={passwordSignup} />
            </div>
            <div className="confirm-password">
              <label className="form__labe text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300" for="confirmPassword">Confirm Password </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white form__input" type="password" id="confirmPassword" placeholder="Confirm Password"
                value={confirmPassword}
                onChange={confirmSignup} />
                <span>
            {passwordError && <p className='validationTextRegister text-red-700 text-center'>Your passwords do not match</p>}</span>
            </div>
          </form>
        </div>
        <button type="submit" className=" registerForm rounded w-full text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={registerForm}
        disabled={registerValidation()}>Complete Registeration</button> 
        </div>
      </div>
    // </div>
    // </div>

  )
}

export default Register
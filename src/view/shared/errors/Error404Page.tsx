import React from 'react'
import './Styles/error.css'
import {Link } from 'react-router-dom'
function Error404Page() {
  return (
    <div className='app__error'>
      <h1 className='error__title'>404 Page</h1>
      <div className='error__description'>Sorry, we were unable to find that page</div>
      <Link to="/" className="underline">
      <div className='error__button'> 
      Back to home </div>
      </Link>
    </div>
  )
}

export default Error404Page

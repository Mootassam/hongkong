import React, { Component } from 'react'
import './Styles/error.css'
import {Link } from 'react-router-dom'
export class Error500Page extends Component {
  render() {
    return (
      <div className='app__error'>
      <h1 className='error__title'>500 Page</h1>
      <div className='error__description'>Sorry, the server is reporting an error</div>
      <Link to="/" className="underline">
      <div className='error__button'> 
      Back to home </div>
      </Link>
    </div>
    )
  }
}

export default Error500Page

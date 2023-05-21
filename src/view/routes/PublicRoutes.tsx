import React from 'react'
import SigninPage from '../Auth/SigninPage'
import {Route } from 'react-router-dom'
function PublicRoutes(props) {
  return (
    <Route 
    
    
    
    render={()=> { 
        return <SigninPage />
    } }
    
    />
      
    
  )
}

export default PublicRoutes

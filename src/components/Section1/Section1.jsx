import React from 'react'
import Navbar from './navbar'
import Page1 from './page1content'

const Section1 = (props) => {
  return (
    <div className='h-screen w-screen bg-blue-200'> 
      <Navbar />
      <Page1  users={props.users}/>
    </div>
  )
}

export default Section1

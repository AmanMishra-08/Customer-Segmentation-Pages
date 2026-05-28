import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

    const users =[
      {
         img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
         intro:'',
         color:'black',
          tag:'Satisfied'
      },
      {
        img:'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
        intro:'',
         color:'lightgreen',
        tag:'Underserved'
      },
      {
        img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
        intro:'',
         color:'red',
        tag:'Underbanked'
      },
      {
        img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        intro:'',
         color:'pink',
        tag:'Underbanked'
      }
    ]
  return (
    <div>
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App

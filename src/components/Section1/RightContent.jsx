import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full p-4 w-2/3  flex rounded-3xl flex-nowrap overflow-x-auto gap-10'>

      {props.users.map(function(elem,idx){
          
         return <RightCard key={idx} id={idx} color={elem.color} img={elem.img}  tag={elem.tag}/>
      })}
        
        
    </div>
  )
}

export default Rightcontent

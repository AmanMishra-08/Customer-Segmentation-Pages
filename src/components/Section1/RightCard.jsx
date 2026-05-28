import React from 'react'
import RightCArdContent from './RightCArdContent'

const RightCard = (props) => {
  return (
    <div className=' relative flex-shrink-0 h-full w-60 overflow-hidden rounded-3xl '>
        <img  className='h-full w-full object-cover' src={props.img}></img>
        <RightCArdContent id={props.id} color={props.color} tag={props.tag}/>
       
    </div>
  )
}

export default RightCard

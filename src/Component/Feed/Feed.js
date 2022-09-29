import React, {useState} from 'react';
import Card from '../Card/Card';
import { useGlobalContext } from '../Utils/Context';
import './feed.css'
import Story from '../Story/Story';


function Feed() {
  const {feedData, setFeedData} = useGlobalContext()
  
  //increase likes on the card
  const addLike = (id) => {
     const newList = feedData.map((item)=>{
      return item.id === id ? {
        ...item, like:item.like + 1, on:false
      } : item
     })
     setFeedData(newList)
  }

  //decreases
  const dislike = (id) => {
    const newList = feedData.map((item)=>{
      return item.id === id ? {
        ...item, like:item.like - 1, on:true
      } : item
     })
     setFeedData(newList)
  }
  return (
    <div className='container-feed'>
      <Story />
      {feedData.map((item)=>{
        const{id, comment, like, selectFile, on} = item
      return(
        <Card key={item.id} {...item} addLike={addLike} dislike={dislike}/>
      )
    })}
    </div>
  )
}

export default Feed
import React from 'react';
import Pic from '../../Asset/Images/pic.jpg'
import{image} from '../Utils/data'
import './story.css'

function Story() {
  return (
    <section>
        <h4>Stories</h4>
        <div className='story-container'>
           {image.map((pic)=>{
            return(
                <div className='story-card' key={pic.id}>
                    <img src={pic.picture} alt="story" key={pic.id} />
                    </div>
            )
           })}   
        </div>
    </section>
  )
}

export default Story

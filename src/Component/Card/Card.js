import React from 'react';
import { MdThumbUpOffAlt} from 'react-icons/md'
import {FaComment, FaShare, FaThumbsUp} from 'react-icons/fa'
import './card.css'

function Card({id, comment, like, selectFile, on, addLike, dislike}) {
  return (
    <div className='card'>
        <div className='card-content'>
          <p>{comment}</p>
         {selectFile&& <img src={selectFile} alt='post' className='image'/>}
        <div className='likes'>
          <button><FaThumbsUp/>{like}</button>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <p>2 comments</p>
            <p>19 shares</p>
          </div>
        </div>
        <div className='action-btn'>
         { on ? <button className='a-btn' id='like' onClick={()=> addLike(id)}><FaThumbsUp/> Like</button> : <button className='a-btn' id='dislike' onClick={()=> dislike(id)}><FaThumbsUp/> Like</button>}
          <button className='a-btn'><FaComment/> Comment</button>
          <button className='a-btn'><FaShare/> Share</button>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Card
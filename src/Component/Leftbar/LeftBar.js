import React, {useState} from 'react'
import { leftBar } from './leftLinks'
import { image } from '../Utils/data'
import './leftbar.css'
import { FaArrowLeft } from 'react-icons/fa'

function LeftBar() {
  const [friendsModal, setFriendsModal] = useState(true)
  return (
    <aside className='container'>
      {leftBar.map((item)=>{
        return(
        item.text === 'Friends' ?
            <div className='left-menu' key={item.id} onClick={()=>setFriendsModal(true)}>
            <button className='left-menu-btn'>{item.icon}</button>
            <p className='left-text'>{item.text}</p>
          </div> :
          <div className='left-menu' key={item.id}>
            <button className='left-menu-btn'>{item.icon}</button>
            <p className='left-text'>{item.text}</p>
          </div>
      )}
      )}
      <div className={`${friendsModal ? 'frnd-container show' :
    "frnd-container" }`}>
            <article>
              <div className="frnd-content">
                <div className='frnd-head'>
                  <FaArrowLeft style={{cursor:'pointer'}}
                  onClick={()=> setFriendsModal(false)}/>
                  <h4>Friends</h4>
                </div>
                  {image.map((friend)=>{
                    return(
                      <div className='frnd-info' key={friend.id}>
                        <div>
                          <img src={friend.picture}  alt={friend.name}/>
                        </div>
                        <p>{friend.name}</p>
                      </div>
                    )
                  })}
               
              </div>
            </article>
        </div>
    </aside>
  )}
export default LeftBar







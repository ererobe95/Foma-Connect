import React from 'react'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'
import { notification } from '../Utils/data'
import './notifications.css'
 

function Notifications({notify, endNotify}) {
  const [notifications, setNotifications] = React.useState(notification)

  const deleteNotify = (id) => {
   const notifyMe = notifications.filter((item)=>{
      return item.id !== id
    })
    setNotifications(notifyMe)
  }

  return (
    <section className={`${notify ? 'notify-container showing' : 'notify-container' }`}>
          <div className='notify-content'>
            <div className='notify-head'>
            <FaArrowLeft onClick={endNotify} style={{cursor:'pointer'}}/>
            <h4>Notifications</h4>
            </div>
            {notifications.length === 0 && <h5>No new notification</h5>}
               {notifications.map((item)=>{
                const{message, pic, id} = item
                return(
                  <div key={id} className='notify-info'>
                    <img src={pic} alt="notify pic" />
                    <p>{message}</p>
                    <FaTimes onClick={()=>deleteNotify(id)}
                    style={{cursor:'pointer'}}/>
                  </div>
                )
               })} 
            </div>
    </section>
  )
}

export default Notifications
import React from 'react'
import './rightBar.css'
import pic from '../../Asset/Images/pic.jpg'
import pic2 from '../../Asset/Images/pic2.jpg'
import pic3 from '../../Asset/Images/pic7.jpg'
import pic4 from '../../Asset/Images/herobanner.jpg'

function RightBar() {
  return (
    <div className='rightbar'>
        <h4>Online Friends</h4>
        <div className='friends'>
            <img src={pic} alt='online' className='img1' />
            <img src={pic2} alt='online' className='img2' />
            <img src={pic3} alt='online' className='img3' />
            <img src={pic4} alt='online' className='img4' />
        </div>
    </div>
  )
}

export default RightBar
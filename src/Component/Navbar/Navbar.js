import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './navbar.css'
import { Avatar } from '@mui/material';
import{links, avatar} from '../links'

function Navbar() {
const [link, setLink] = useState('home')
const [avatars, setAvatars] = useState('')

  return (
        <header>
          <nav>
            <div className='brand-name'>
             <h3>Foma Connect</h3>
             <span className='search-icon'><FaSearch /></span>
            </div>
            <div className='links'>
              {links.map((btn)=>{
                return(
                  <button value={btn.name} className="link-btn" key={btn.id}
                    onClick={()=>setLink(btn.name)}
                    style={{
                      color:link===btn.name ? 'blueviolet' : '' 
                    }}
                  >{btn.icon}</button>
                )
              })}
            </div>
            <div className='avatar'>
             {avatar.map((item)=>{
              return(
                <div className='avatar-container' key={item.id}>
                <Avatar sx={{background:'#e4e6eb'}} 
                onMouseEnter={() => setAvatars(item.info)}
                onMouseLeave={()=> setAvatars('')}>
                  <span className='avatar-icon'>{item.icon}</span>
                </Avatar>
                <button className='avatar-btn'
                  style={{
                    display: avatars === item.info ? 'block' : 'none'
                  }}
                >{item.info}</button>
                </div>
              )
             })}
            </div>
          </nav>
        </header>
  )
}

export default Navbar
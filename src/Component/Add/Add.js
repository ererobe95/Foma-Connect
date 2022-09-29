import React,{useRef, useState} from 'react';
import { FaArrowLeft, FaPlus, FaTimes } from 'react-icons/fa';
import { options } from './options';
import './add.css'
import {useGlobalContext} from '../Utils/Context'

function Add() {
    const [open, setOpen] =useState(false)
    const [formData, setFormData] = useState({
      comment:'',
      display:''
    })
    const [selectFile, setSelectFile] = useState('');
    const ref = useRef()
    const{feedData, setFeedData, feedUpdate} = useGlobalContext()

    const change = (e) => {
      const {name, value } = e.target;
      setFormData((prevState)=>{
        return {
          ...prevState,
          [name]:value
        }
      })
    }

    const fileChanger = (e)=>{
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = () => {
        if(reader.readyState ===2){
          setSelectFile(reader.result)
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
    
    //form submit function
    const handleSubmit = (e) =>{
      e.preventDefault()
      const {comment} = formData
      if(comment || selectFile){
      feedUpdate({comment, selectFile})
      setFormData({
        comment:''
      })
      ref.current.value =""
      setSelectFile(null)
    }
  }

    const closeForm = ()=> {
      setOpen(false)
      ref.current.value =""
      setSelectFile(null)
    }

    const previewClose = () =>{
      ref.current.value =""
      setSelectFile(null)
    }

  return (
    <>
    <div>
        <button className='add-btn' onClick={()=>setOpen(true)}>Post</button>
    </div>
    <div className={`${open ? 'modal-container show' : 'modal-container'  }`}>
        <div className='modal-content'>
          <div className='close'>
            <FaArrowLeft style={{cursor:'pointer'}}
              onClick={closeForm}/>
            <p>Create post</p>
          </div>
            <form onSubmit={handleSubmit}>
              <textarea
                name='comment'
                placeholder='Make a post'
                rows={5}
                value={formData.comment}
                onChange={change}
                />
              <select name='display'
                value={formData.display}
                onChange={change}>
                {options.map((item)=>{
                  return(
                    <option value={item.value}>{item.label}</option>
                  )
                })}
              </select>
              <div className='file'>
                <div onClick={(e)=>{
                  e.preventDefault()
                  ref.current.click()
                }}>Add Image</div>
                <input type='file'
                accept="image/*"
                onChange={fileChanger}
                id="image"
                ref={ref} 
                style={{display:'none'}}/>
              </div>
              {selectFile&& <div className='preview-image'>
              <img src={selectFile} alt='image post' />
              <FaTimes  className="preview-close" onClick={previewClose}/>
              </div>}
              <button onClick={()=>setOpen(false)}>post</button>
            </form>
        </div>
    </div>
    </>
  )
}


export default Add
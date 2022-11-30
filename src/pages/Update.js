import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Update= () => {
  const [book,setBooks]=useState({
    title:"",
    desc:"",
    cover:"",
    price:""
  })
  const navigate=useNavigate();
  const location=useLocation();

  const bookId=location.pathname.split('/')[2]

  const handleChange=(e)=>{
    setBooks((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick= async (e)=>{
    e.preventDefault() 
    try{

      await axios.put('http://localhost:8000/books/'+bookId,book)
      navigate('/')


    }catch(err){
      console.log(err)

    }
  }
  return (
    <div className='form'>
      <h1>Update Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <input type="text" placeholder='description' onChange={handleChange} name='desc'/>
      <input type="text" placeholder='cover'name='cover'onChange={handleChange}/>
      <input type="number" placeholder='price' name='price'onChange={handleChange}/>
      <button className='formButton' onClick={handleClick}>update</button>
    </div>
  )
}

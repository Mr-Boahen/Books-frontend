import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Add = () => {
  const [book,setBooks]=useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  })
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setBooks((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick= async (e)=>{
    e.preventDefault() 
    try{

      await axios.post('http://localhost:8000/books',book)
      navigate('/')


    }catch(err){
      console.log(err)

    }
  }
  return (
    <div className='form'>
      <h1>Add new Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <input type="text" placeholder='description' onChange={handleChange} name='desc'/>
      <input type="text" placeholder='cover'name='cover'onChange={handleChange}/>
      <input type="number" placeholder='price' name='price'onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

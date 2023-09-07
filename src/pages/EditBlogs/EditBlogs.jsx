import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './EditBlogs.css'

const EditBlogs = () => {
  const {id} = useParams()
  // console.log(id)
  const navigate = useNavigate()

  const [blog,setBlog] = useState({})
  console.log(blog)

  const editBlog = async(e) =>{
    e.preventDefault()
   const response = await axios.put("https://64f063488a8b66ecf7799178.mockapi.io/blogs/" +id,blog)
   if(response.status ==200){
    navigate("/singleBlog/" + id)
   }else{
    alert("Something went wrong")
   }
  }

  const fetchBlog = async ()=>{
    const response = await axios.get("https://64f063488a8b66ecf7799178.mockapi.io/blogs/"+ id)
    console.log(response)
    if(response.status == 200){
     setBlog(response.data)
     console.log(blog)
  
    }else{
     alert("something went wrong")
   }
 }

 useEffect(()=>{
  fetchBlog()
 },[])
  return (
    <>
        <form className="form-container" onSubmit={editBlog}>
        <h2>Edit Blog</h2>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(e)=>setBlog({...blog,title: e.target.value})} value={blog.title} placeholder='title' name="title" required  /> 
            
        </div>
        
        <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" onChange={(e) => setBlog({ ...blog,description: e.target.value })} value={blog.description} placeholder='description' name="description" rows="4" required ></textarea>
        </div>
        
        <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="text" onChange={(e)=>setBlog({...blog,avatar: e.target.value})} value={blog.avatar} id="image" name="image"  required />
        </div>
        
        <button type="submit">Edit</button>
    </form>
    </>
  )
}

export default EditBlogs

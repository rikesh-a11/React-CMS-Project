import React, { useState } from 'react'
import './CreateBlogs.css'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlogs = () => {
  const navigate = useNavigate()

  // const [title,setTitle] = useState("");
  // const[description,setDescription] = useState("");
  // const[image,setImage] = useState("");

  const createBlog = async(e)=>{
    e.preventDefault();
    // new method for large  inputs
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log(data)


    // const data = {
    //   title:title,
    //   description:description,
    //   avatar: image
    // }
    const response = await axios.post("https://64f063488a8b66ecf7799178.mockapi.io/blogs",data)
    if (response.status === 201) { // Check response status, not response.data
     navigate("/") // Redirect to home page
    }else{
      alert("something went wrong")
    }
  }

  return (
    <>
    <Navbar />
        <form className="form-container" onSubmit={createBlog} >
        <h2>Add Blog</h2>
        <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" placeholder='title' name="title" required  /> 
            
        </div>
        
        <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" placeholder='description' name="description" rows="4" required ></textarea>
        </div>
        
        <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="text" id="image" name="image"  required />
        </div>
        
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default CreateBlogs

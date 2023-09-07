import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './SingleBlog.css'
import Navbar from '../../components/Navbar/Navbar';

const SingleBlogs = () => {
  const navigate  = useNavigate();

  const {id} =useParams();
  // console.log(id);
  const [blog,setBlog] = useState();
  
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
// const fetchBlog = async () => {
//   try {
//     const response = await axios.get(`https://64f063488a8b66ecf7799178.mockapi.io/blogs/${id}`);
//     if (response.status === 200) {
//       setBlog(response.data);
//     } else {
//       console.error("Failed to fetch blog:", response.status, response.statusText);
//     }
//   } catch (error) {
//     console.error("Error fetching blog:", error.message);
//   }
// }



  //delete blog
  const deleteBlog  = async()=>{
   const response = await axios.delete("https://64f063488a8b66ecf7799178.mockapi.io/blogs/" + id)
   if(response.status == 200){
    navigate("/")
   }else{
    alert("something went wrong")
   }
  }

  useEffect(()=>{
    fetchBlog()
  },[])

  return (
    <>
    <Navbar />
    <div className="blog-container">
        <img className="avatar" src={blog?.avatar} alt="Author Avatar" />
        <h1 className="blog-title">{blog?.title}</h1>
        <p className="blog-description">{blog?.description}</p>
        <div className='btn'>
          <button onClick={deleteBlog}>Delete</button>
          <button onClick={()=> navigate("/editBlogs/" + blog.id)}>Edit</button>
        </div>
    </div>
    </>
  )
}
export default SingleBlogs

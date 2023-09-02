import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import './AllBlogs.css'
import { useNavigate } from 'react-router-dom'

const AllBlogs = () => {
  const navigate = useNavigate()
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async() =>{
   const response = await axios.get("https://64f063488a8b66ecf7799178.mockapi.io/blogs")
   if(response.status == 200){
    console.log(response.data)
    setBlogs(response.data)
   }
    
  }
useEffect(()=>{
  fetchBlogs()

},[])

  return (
    < >
      <Navbar />
        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',gap:'20px'}}>
          {
            blogs.map((blog)=>{
              return(
                <div className="card" key={blog.id}>
                  <img src={blog.avatar} alt="Avatar" width='100%' />
                  <div className="container">
                    <h4><b>{blog.title}</b></h4>
                    <p>{blog.description}</p>
                    <p>{blog.createdAt}</p>
                  </div>
                  <p onClick={()=> navigate("/singleBlog/" + blog.id)} style={{textAlign:'center'}}>See More</p>
                </div>
              )
            })
          }
         
        </div>
      
    </>
  )
}

export default AllBlogs

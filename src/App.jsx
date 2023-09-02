
import './App.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import CreateBlogs from './pages/CreateBlogs/CreateBlogs'
import EditBlogs from './pages/EditBlogs/EditBlogs'
import AllBlogs from './pages/AllBlogs/AllBlogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/singleBlog/:id" element= {<SingleBlog />}  />
          <Route path="/createBlogs" element={<CreateBlogs />} />
          <Route path="/editBlogs/:id" element={<EditBlogs />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

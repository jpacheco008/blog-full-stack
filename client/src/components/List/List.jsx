import './List.css'
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Blog from '../Blog/Blog'
import { getBlogs } from '../../services/blogs'
import Nav from '../Nav/Nav'

const List = () => {
  const [allBlogs, setAllBlogs] = useState([])

  useEffect(() => {
    const fecthBlogs = async () => {
      const blogs = await getBlogs()
      console.log(blogs);
      setAllBlogs(blogs)
    }
    fecthBlogs()
  }, [])


  return (
    <div>
      {/* <Nav /> */}
      {allBlogs.map((blog) => {
        return <Blog id={blog.id} name={blog.name} imgURL={blog.imgURL} comment={blog.comment} />
      })}
    </div>
  )
}

export default List
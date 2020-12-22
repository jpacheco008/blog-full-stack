import './Blog.css'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  return (
    <div>
      <Link className='blog' to={`/blogs/${props.id}`}>
        <img className='blog-image' src={props.imgURL} alt={props.name} />
        <did className='blog-name'>{props.name}</did>
        <did className='blog-comment'>{props.comment}</did>
      </Link>
    </div>
  )
}

export default Blog
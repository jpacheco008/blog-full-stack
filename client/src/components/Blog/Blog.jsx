import './Blog.css'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  return (
    <div>
      <Link className='blog' to={`/posts/${props._id}`}>
        <img className='blog-image' src={props.imgURL} alt={props.name} />
        <did className='blog-name'>{props.name}</did>
      </Link>
    </div>
  )
}

export default Blog
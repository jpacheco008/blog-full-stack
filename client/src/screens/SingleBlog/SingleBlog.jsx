import { useState, useEffect } from "react";
import "./SingleBlog.css";
// import Nav from "../../components/Nav/Nav";
import { getBlog, deletePost } from "../../services/blogs.js";
import { useParams, Link } from "react-router-dom";

const SingleBlog = () => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getPostData = async () => {
      const post = await getBlog(id);
      setPost(post);
      setLoaded(true);
    };
    getPostData();
  }, [id]);
  console.log(post);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="singlePost">
      <img className="postImg" src={post.imgURL} alt={post.name}></img>
      <div className="name">{post.name}</div>
      <div className="comment">{post.comment}</div>
      <div className="button-div">
        <button className="edit-button">
          <Link to={`/posts/${post._id}/edit`}>Edit</Link>
        </button>
        <button
          className="delete-button"
          onClick={() => {
            deletePost(post._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;

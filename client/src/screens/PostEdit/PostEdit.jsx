import React, { useState, useEffect } from "react";
import "./PostEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { getBlog, updatePost } from "../../services/blogs";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    name: "",
    imgURL: "",
    comment: "",
  });

  const [edit, setEdit] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const post = await getBlog(id);
      setPost(post);
    };
    getPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setEdit(updated);
  };

  if (edit) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <div className="post-edit">
      <div>
        <img className="imgEdit" src={post.imgURL} alt={post.name}></img>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Image Url"
            value={post.imgURL}
            name="imgURL"
            onChange={handleChange}
          />
        </form>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={post.name}
          name="name"
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={post.comment}
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
        />
        <button type="submit" className="save">
          Save
        </button>
      </form>
    </div>
  );
};

export default PostEdit;

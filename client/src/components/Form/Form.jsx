import React from 'react';
import { useState } from 'react'
import { addPost } from '../../services/blogs.js'

const Form = () => {
    const [blogForm, setBlogForm] = useState({
        name: " ",
        imgURL: " ",
        comment: " "

    })

    const formHandleChange = () => {

    }

    const handleSubmit = () => {
        addPost(blogForm)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name="name" type="string" placeholder="user name" value="" />
                <label htmlFor="imgURL">Image</label>
                <input name="imgURL" type="string" placeholder="image url" />
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" type="text" placeholder=""></textarea>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form; 
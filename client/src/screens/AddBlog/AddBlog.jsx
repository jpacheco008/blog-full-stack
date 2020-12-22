import React from 'react';
import { useState } from 'react'

const AddBlog = () => {
    const [blogForm, setBlogForm] = useState("")

    const formHandleChange = () => {

    }

    const handleSubmit = () => {

    }
    return (
        <div>
            <form onSubmit>
                <label htmlFor="name">Name</label>
                <input name="name" type="string" placeholder="user name" />
                <label htmlFor="imgURL">Image</label>
                <input name="imgURL" type="string" placeholder="image url" />
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" type="text" placeholder=""></textarea>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddBlog;
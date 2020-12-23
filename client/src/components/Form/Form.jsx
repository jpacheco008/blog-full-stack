import React from 'react';
import { useState } from 'react'
import { createPost } from '../../services/blogs'
import './Form.css'

const Form = (props) => {
    console.log(props)
    const [blogForm, setBlogForm] = useState({
        name: " ",
        imgURL: " ",
        comment: " "

    })
    console.log(blogForm)
    const formHandleChange = (event) => {
        const { name, value } = event.target
        setBlogForm({
            ...blogForm,
            [name]: value
        })

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const create = await createPost(blogForm)
        setBlogForm({ create })

    }
    return (
        <div className="form-div">
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    id="form-name"
                    type="string"
                    value={props.name}
                    placeholder="user name"
                    onChange={formHandleChange} /><br />

                <label htmlFor="imgURL">Image</label>
                <input
                    name="imgURL"
                    id="form-url"
                    type="string"
                    placeholder="image url"
                    value={props.imgURL}
                    onChange={formHandleChange} /><br />

                {/* <label htmlFor="comment"></label> */}
                <textarea
                    name="comment"
                    id="text-area"
                    type="text"
                    placeholder="Your comment ..."
                    value={props.comment}
                    onChange={formHandleChange}></textarea><br />

                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    );
};

export default Form; 
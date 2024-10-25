import React from 'react'
import './index.css'
import { useState } from 'react'

export default function Index({addPost}) {

    let [title,setTitle] = useState("")
    let [status,setStatus] = useState("upcoming")

    let resetInput = () => {
        setTitle('');
    }

    let upload_post = (e) => {
        e.preventDefault();

        let post = {
            id : Math.floor(Math.random()*10000),
            title : title,
            status : status
        }
        
        addPost(post);
        resetInput();
        
    }

    // let changeHandler = (e) => {
    //     setTitle(e.target.value)
        
    // }
  return (
    <form className="post-form" onSubmit={upload_post}>
        <h1>Create Form {status}</h1>
        <div className="form-control">
            <label>Title</label>
            <input type='text' className="input-form" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </div>
        <div className="form-control">
            <label>Status</label>
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="dropped">Dropped</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
            </select>
        </div>
        
        <div className="form-control">
            <button type="submit">Post Now</button>
        </div>
    </form>
  )
}

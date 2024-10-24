import React from 'react'
import './index.css'
import { useState } from 'react'

export default function Index() {

    let [title,setTitle] = useState("")

    // let changeHandler = (e) => {
    //     setTitle(e.target.value)
        
    // }
  return (
    <form className="post-form">
        <div className="form-control">
            <label>Title</label>
            <input type='text' className="input-form" onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <p>{title}</p>
        <div className="form-control">
            <button>Post Now</button>
        </div>
    </form>
  )
}

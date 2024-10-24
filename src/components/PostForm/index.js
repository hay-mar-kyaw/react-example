import React from 'react'
import './index.css'
import { useState } from 'react'

export default function Index() {

    let [title,setTitle] = useState("")

    let resetInput = () => {
        setTitle('');
    }

    // let changeHandler = (e) => {
    //     setTitle(e.target.value)
        
    // }
  return (
    <form className="post-form">
        <div className="form-control">
            <label>Title</label>
            <input type='text' className="input-form" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </div>
        <p>{title}</p>
        <button type="submit" onClick={resetInput}>Reset</button>
        <div className="form-control">
            <button>Post Now</button>
        </div>
    </form>
  )
}

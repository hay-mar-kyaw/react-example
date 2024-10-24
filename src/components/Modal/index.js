import React from 'react'
import './index.css'
import ReactDOM from 'react-dom';

export default function Modal({children, danger, setShowModal}) {
     let className = danger ? 'border-red' : 'border-blue';
  return (
   
    ReactDOM.createPortal(
        <div className="modal-backdrop">
        <div className={`modal ${className}`}>
            {/* modal content  */}
            {children}
            <button onClick={()=>setShowModal(false)}>Close</button>
        </div>
    </div>, document.getElementById('modal') )
    
    
  )
}

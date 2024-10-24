import React from 'react'
import './index.css'
import ReactDOM from 'react-dom';

export default function Modal({children}) {
  return (

    ReactDOM.createPortal(
        <div className="modal-backdrop">
        <div className="modal">
            {/* modal content  */}
            {children}
        </div>
    </div>, document.getElementById('modal') )
    
    
  )
}

import React from 'react'
import './index.css'

export default function Modal({children}) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
            {/* modal content  */}
            {children}
        </div>
    </div>
  )
}

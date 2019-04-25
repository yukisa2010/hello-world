import React from 'react'

function HeadLine(props) {
  return (
    <div className='header'>
      <img src='./logo/whitebear.png' alt='logo'/>
      <i className="fas fa-bars skyblue" onClick={() => props.openMenu()}></i>
    </div>
  )
}

export default HeadLine;
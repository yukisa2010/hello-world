import React from 'react'
import { Link } from 'react-router-dom';

function WorkParts(props) {
  // console.log(props.item.logo);
  // let logoName = props.items.logo

  return (
    <div className='WorkParts'>
      <img src={'./logo/' + props.item.logo} alt='logo'/>
      <Link
        key={1}
        to='/basic'
        style={{textDecoration: 'none'}}
      ><p>スタート</p>
      </Link>
    </div>
  )
}

export default WorkParts;
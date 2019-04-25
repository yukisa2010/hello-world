import React from 'react';
import {Link} from 'react-router-dom';

function Login(props) {
  
  return (
    <div className='login'>
      <div className='box'>
        <img src='./logo/space-shuttle.png' alt='logo'/>
        <input type='text'/>
        <input type='text'/>
        <p className='button'>
          <Link
            key={1}
            to='/'
            style={{textDecoration: 'none'}}
          >ログイン</Link></p>
      </div>
    </div>
  )
}

export default Login;
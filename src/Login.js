import React from 'react';
import {Link} from 'react-router-dom';

function Login(props) {
  
  return (
    <div className='login'>
      <div className='box'>
        <img src='./logo/space-shuttle.png' width='80%' alt='logo'/>
        <input type='text'/>
        <input type='text'/>
        <p className='button'>
        <Link
            key={1}
            to='/'
            style={{textDecoration: 'none'}}
          >ログイン</Link></p>
        <p className='button'>
          <Link
            key={2}
            to='/CreateNewAccount'
            style={{textDecoration: 'none'}}
          >新規会員登録</Link></p>
      </div>
    </div>
  )
}

export default Login;
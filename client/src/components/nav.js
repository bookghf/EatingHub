import React from 'react'
import '../css/nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href='/'>
          <img src="food.png" className="logo" alt="fooding"/>
        </a>
      </div>
      <ul className='none'>
        <li><img src="bell.png" alt="notification" className='notification'></img></li>
        <li><img src="logo192.png" alt="profile" className='profile-picture'></img></li>
        <li className='profile-name'><div> User </div></li>
      </ul>
    </div>
  )
}

export default Nav
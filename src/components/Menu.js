import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {Link} from 'react-router-dom'
import auth from '../firebase.init'
import Profile from './Profile';

function Menu() {
  const [user, loading, error] = useAuthState(auth)
  return (
    <div className="navbar bg-blue-700 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
        <li><Link to='/about-us'>Blog</Link></li>
        <li>{user && <Link to='/my-blog'>My Blog</Link>}</li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-sm">SageSource Knowledge</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about-us'>About</Link></li>
      <li><Link to='/contact-us'>Contact Us</Link></li>
        <li><Link to='/about-us'>Blog</Link></li>
        <li>{user && <Link to='/my-blog'>My Blog</Link>}</li>
    </ul>
  </div>
  <div className="navbar-end">
        <a className="btn bg-transparent text-white outline-none border-none hover:bg-transparent">{user ? <Profile></Profile> : <Link to='/login'>Login</Link>}</a>
  </div>
</div>
  )
}

export default Menu
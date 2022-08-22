import React from 'react'
import { signOut } from 'firebase/auth';
import auth from '../firebase.init'
import { Link, useSearchParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

function Profile() {
  const [user] = useAuthState(auth)
    return (
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="dummy-profile-pic.png" />
            </div>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <p className="justify-between">
                {user.displayName}
              </p>
            </li>
            <hr />
            <li><Link to='/user-post'>Publish Your Blog</Link></li>
            <li><button onClick={()=>signOut(auth)}>LogOut</button></li>
          </ul>
        </div>
      </div>
  )
}

export default Profile
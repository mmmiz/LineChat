import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [currentUser] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    })
  }

  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleSignout}>logout</button>
        {/* <button onClick={()=>signOut(auth)}>logout</button> */}
      </div>
    </div>
  )
}

export default Navbar
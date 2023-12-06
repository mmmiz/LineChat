import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
// import {signOut} from 'firebase/auth';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/login');
  }
  
  return (
    <>
     {/* <Button onClick={() => auth.signOut()}>SignOut</Button> */}
     <Button onClick={handleLogOut}>SignOut</Button>
     {/* <Button onClick={() =>signOut(auth)}>SignOut</Button> */}
    </>
    )
}

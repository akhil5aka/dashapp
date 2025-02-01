'use client' 
import React from 'react'
import Login from '@/app/components/Login/Login'
import { useSession } from 'next-auth/react'
import { Box } from '@mui/material'
import { Dashboard } from '@mui/icons-material'

const signIn = () => {
    const {data:session}= useSession()
  return (
  <Box
  sx={{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }}>

    <h2>
        {session? "Thank you for logging in ":"please login"}
        {session?(
          <>
          <Dashboard/>
          </>):<Login/>}
        
    </h2>

  </Box>
  )
}

export default signIn

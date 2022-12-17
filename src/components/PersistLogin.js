import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken'

const PersistLogin = () => {
  const [loading,setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const {auth} = useAuth()

  useEffect(() => {
    
  
 const verfyRefreshToken = async ()=>{
  try {

    await refresh()
    
  } catch (error) {
    console.log(error)
  }
  finally{
    setIsLoading(false)
    
  }
 }

 !auth.accessToken ? verfyRefreshToken() : setIsLoading(false)

  }, [])
  
  return (
    <>
    {loading ? <p>Loading..</p>:<Outlet/>}
    </>
  )
}

export default PersistLogin
import React from 'react'
import { useParams } from 'react-router-dom'
function Profile() {
  const params = useParams();
  console.log(params)
  return (
    <div>Profile page {params.profileId}</div>
  )
}

export default Profile
import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>404 Not Found
        <br />
        {/* This will do client side routing & will not reload the page */}
        <Link to="/">Go to Home react router LINK</Link>
        <br />
        {/* this will reload the whole page like native browser anchor tag */}
        <a href="/">Go to Home from anchor tag</a>
    </div>

  )
}

export default NotFoundPage
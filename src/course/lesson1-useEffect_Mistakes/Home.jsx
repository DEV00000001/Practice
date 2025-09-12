import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Link to="/posts"> Go to posts </Link>
    </div>
  )
}

export default Home
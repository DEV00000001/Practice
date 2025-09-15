import { Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
function NavWrapper() {
  return (
    <>
      <nav style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/posts"> Posts </Link>
      </nav>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default NavWrapper
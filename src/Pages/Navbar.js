import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Navbar() {
  return (
    <div>Navbar
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'./Pages/ContactUs'}>ContactUS</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar
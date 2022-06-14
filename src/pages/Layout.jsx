import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/first">FCC React for beginners</Link>
        </li>
        <li>
          <Link to="/second">ReactJS (official)</Link>
        </li>
        <li>
          <Link to="/third">useState Hook</Link>
        </li>

        <li>
          <Link to="/fourth">useEffect Hook</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}

export default Layout
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
    <div>
        
        <ul className="navbar-nav mx-auto sidebar mt-3 ">
        <Link className="nav-item box"  to="/home" >
          <div className="nav-link active" aria-current="page">Home</div>
        </Link>
        <Link className="nav-item box" to="/profile">
          <div className="nav-link" >Profile</div>
        </Link>
        <Link className="nav-item box" to="/inbox">
          <div className="nav-link" >Inbox</div>
        </Link>
        <li className="nav-item box dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <Link className="nav-item box">
          <div className="nav-link" to="/contact">Invoice</div>
        </Link>
        <Link className="nav-item box">
          <div className="nav-link" to="/contact">FAQ / Help</div>
        </Link>
        <Link className="nav-item box">
          <div className="nav-link" to="/contact">Contact</div>
        </Link>
        <Link className="nav-item box">
          <div className="nav-link" to="/contact">Contact</div>
        </Link>
        <Link className="nav-item box">
          <div className="nav-link" to="/contact">Contact</div>
        </Link>
      
      </ul>
      
      
      
    </div>
    </div>
  )
}

export default SideBar

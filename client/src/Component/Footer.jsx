import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid bg-dark text-white pt-5 ">
            <div className="container">
            <div className="row">
                <div className="col-6 col-lg-3 ">
                    <h6>Quick Links</h6>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">Service</Link>
                    </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3">
                    <h6>More Links</h6>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Testimonials</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">Terms</Link>
                    </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Ratings</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3">
                    <h6>Contact</h6>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Facebook</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Instagram</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">tailor@gmail.com</Link>
                    </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">+234 111 1111 111</Link>
                    </li>
                    </ul>
                </div>
                <div className="col-6 col-lg-3">
                    <h6>Others</h6>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Training</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">FAQ</Link>
                    </li>
                        {/* <li className="nav-item">
                        <Link className="nav-link" to="/contact">+234 913 1456 178</Link>
                    </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.gif'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <a class="navbar-brand" href="/home"><img src={logo} height="50px" alt="Mukto Logo" srcset=""/></a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/"><span>HOME</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/skills"><span>Skills</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/projects"><span>PROJECTS</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/blogs"><span>BLOGS</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4" to="/contact"><span>CONTACT</span></Link>
                        </li>
                        </ul>
                        <a className="btn ms-4" href="https://drive.google.com/file/d/1R43WfT5hodWWYj7k-5SSzlMTOA8nYUf3/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>RESUME</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

import React from 'react'
import logo from '../images/logo.webp'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" id="navbrand" href="/"><img src={logo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon" style={{ color: 'gray' }}></span>
            </button>
            {/*justfy-content-end manda a barra para o final da linha*/}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <button>Start Free Trial</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
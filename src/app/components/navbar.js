import React from 'react'
import logo from '../images/logo.webp'
import '../css/navbar.css'
import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        /*Nabar Reactbootstrap*/
        <Navbar className="navbar" bg="ligth" expand="xl">
            {/*Brand*/}
            <Navbar.Brand className="brand" href="/"><img src={logo} /></Navbar.Brand>
            {/*Botao toggle*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
            {/*Itens da navbar com e sem collapse*/}
            <Navbar.Collapse id="basic-navbar-nav" className="collapse">
                <Nav className="navbar-nav">
                    <Nav.Link className="nav-item" href="/" ><a>Home</a></Nav.Link>
                    <Nav.Link className="nav-item" href="/" ><a>About</a></Nav.Link>
                    <Nav.Link className="nav-item" href="/" ><a>Features</a></Nav.Link>
                    <Nav.Link className="nav-item" href="/" ><a>Pricing</a></Nav.Link>
                    <Nav.Link className="nav-item" href="/" ><a>Blog</a></Nav.Link>
                    <Nav.Link className="nav-item" href="/" ><a>Contact</a></Nav.Link>
                    <Nav.Link className="nav-item" href="/" ><button>Start Free Trial</button></Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavigationBar
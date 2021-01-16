import React from 'react'
import logo from '../images/logo.webp'
import '../css/navbar.css'
import { Navbar, Nav } from 'react-bootstrap'

const NavigationBar = () => {
    /*Mudar tamanho da navbar de acordo com o tamanho do scroll*/
    let navbar = document.getElementById('navbar');
    let doc = document.documentElement;
    window.addEventListener('scroll', function () {
        /*Para pegar o valor total do scroll -> 100*scrollAtual/(scroll_total - tamanhoTela) */
        let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
        if (value > 1) {
            navbar.style.height = "60px";
        } else {
            navbar.style.height = "100px";
        }
    })
    return (
        /*Nabar Reactbootstrap*/
        <Navbar id="navbar" className="navbar" bg="ligth" expand="xl">
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
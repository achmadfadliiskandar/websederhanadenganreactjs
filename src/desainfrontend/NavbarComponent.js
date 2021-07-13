import React, { Component } from 'react'
import { Nav,Navbar} from 'react-bootstrap';

export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" fixed="top"  variant="dark" expand="lg">
                <div className="container">
                <Navbar.Brand href="#">PROGRAMMER BUTUN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#progres">Skill</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </div>
                </Navbar>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Nav,Navbar} from 'react-bootstrap';
import styled from "styled-components";
// import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';

export default class NavbarComponent extends Component {
    render() {
        const GayaNavbar = styled.div`
        margin: 0;
        #nav{
            color: white;
            display: flex;
            justify-content: space-around;
            margin: 0;
            display: flex;
        }
        * {
        cursor: pointer;
        }
        .scrolling-buttons {
            display: flex;
            flex-direction: column;
        }
        .active{
            border-bottom: 1px solid white;
            color : white;   
        }
        `;
        const barisuli = {
            margin: "10px"
        }
        return (
            <GayaNavbar>
            <div id="nav">
                <Navbar bg="dark" fixed="top"  variant="dark" expand="lg">
                <div className="container">
                <Navbar.Brand href="#">PROGRAMMER BUTUN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Link activeClass="active" style={barisuli} to="abouts" spy={true} smooth={true} duration={1000}>About </Link>
                <Link activeClass="active" style={barisuli} to="progress" spy={true} smooth={true} duration={1000}>Skill</Link>
                <Link activeClass="active" style={barisuli} to="contacts" spy={true} smooth={true} duration={1000}>Contact</Link>
                </Nav>
                </Navbar.Collapse>
                </div>
                </Navbar>
            </div>
            </GayaNavbar>
        )
    }
}

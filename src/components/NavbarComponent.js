import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export const NavbarComponent = () => {
    return(
    <Navbar display="flex" bg="dark" variant="dark" expand="sm" className="pb-3">
        <Container>
            <Navbar.Brand>Elin Linderholm</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} exact to= '/'>Home</Nav.Link>                
                <Nav.Link as={NavLink} exact to= '/portfolio'>Portfolio</Nav.Link>
                <Nav.Link as={NavLink} exact to= '/contact'>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar.Toggle>
        </Container>
    </Navbar>
    )
}
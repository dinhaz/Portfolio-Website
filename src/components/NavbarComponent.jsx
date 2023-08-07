import { useState, useEffect } from "react";

import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";

import { navButton, navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);
    const changeBgColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBgColor();

        window.addEventListener("scroll", changeBgColor);
    });

    return (
        <div>
            <Navbar expand="lg" className={("shadow-sm", changeColor ? "color-active" : "")} fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="navbar-brand fs-3">
                        Dinhaz.Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar`} aria-labelledby={`offcanvasNavbarLabel`} placement="top">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="d-block d-md-none" id={`offcanvasNavbarLabel`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body id="basic-navbar-nav">
                            <Nav className="ms-auto text-start text-lg-center ">
                                {navLinks.map((link) => {
                                    return (
                                        <div className="nav-link" key={link.id}>
                                            <NavLink to={link.path} className={("text-decoration-none", ({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : ""))}>
                                                {link.text}
                                            </NavLink>
                                        </div>
                                    );
                                })}
                            </Nav>
                            <div className="ms-auto gap-2 d-flex justify-content-center mt-3 mt-md-0">
                                {navButton.map((btn) => {
                                    return (
                                        <div key={btn.id}>
                                            <Button variant={btn.variant} size={btn.size} to={btn.path}>
                                                {btn.text}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;

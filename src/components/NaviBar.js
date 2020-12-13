import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NaviBar = () => (
    <>
        <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
            <Navbar.Brand>Приколдесы</Navbar.Brand>
            <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
            <Navbar.Collapse id={"responsive-navbar-nav"}>
                <Nav className={"mr-auto"}>
                    <Nav.Link as={Link} to={"/dating"}>Знакомства</Nav.Link>
                    <Nav.Link as={Link} to={"/dialog"}>Диалоги</Nav.Link>
                    <Nav.Link as={Link} to={"/profile"}>Профиль</Nav.Link>
                </Nav>
                <Nav>
                    <Button className={"mr-2"} variant={"primary"}>Войти</Button>
                    <Button variant={"primary"}>Зарегистрироваться</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default NaviBar;


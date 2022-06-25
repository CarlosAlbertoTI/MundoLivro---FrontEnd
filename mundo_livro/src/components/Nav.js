import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Nav.css'
import mundoLivroLogo from '../images/livro_logo.png'

const NavHeader = props => {



    return (
        <Navbar bg="" variant='dark' expand="lg" id="navHeader">
            <Container fluid>
                <Navbar.Brand href="#"> <img src={mundoLivroLogo} id="logoLivroNav" /> Mundo Livro</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Form className="d-flex">
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {props.home_page ? <Nav.Link href="#action1" active>Home</Nav.Link> : <Nav.Link href="#action1">Home</Nav.Link>}
                            {props.entregas ? <Nav.Link href="#action1" active>Entregas</Nav.Link> : <Nav.Link href="#action1">Entregas</Nav.Link>}
                            {props.meus_livros ?
                                (
                                    <>
                                        <Nav.Link href="#action1" active>Meus Livros</Nav.Link>
                                        <Button variant="secondary" onClick={props.showLivros}>Adicionar Livro</Button>
                                    </>
                                ) :
                                <Nav.Link href="#action1">Meus Livros</Nav.Link>}
                        </Nav>



                    </Navbar.Collapse>
                </Form>
            </Container>
        </Navbar>
    )
}

export default NavHeader
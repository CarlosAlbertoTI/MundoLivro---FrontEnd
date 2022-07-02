import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Nav.css'
import mundoLivroLogo from '../images/livro_logo.png'

const NavHeader = props => {

    let navigate = useNavigate();

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
                            {props.login_page == undefined && (
                            <>
                            {props.home_page ? 
                                <Nav.Link active to="/Home">
                                    <Link to="/Home">Home</Link>
                                </Nav.Link> 
                                : 
                                <Nav.Link >
                                    <Link to="/Home">Home</Link>
                                </Nav.Link>
                                }
                            {props.entregas ? 
                                <Nav.Link  active>
                                    <Link to="/Entregas">Entregas</Link>
                                </Nav.Link>
                                 : 
                                <Nav.Link >
                                    <Link to="/Entregas">Entregas</Link>
                                </Nav.Link>
                                }
                            {props.meus_livros ?
                                (
                                    <>
                                        <Nav.Link active>
                                            <Link to="/MeusLivros">Meus Livros</Link>
                                        </Nav.Link>
                                        <Button variant="secondary" onClick={props.showLivros}>Adicionar Livro</Button>
                                    </>
                                ) :
                                <Nav.Link active>
                                    <Link to="/MeusLivros">Meus Livros</Link>
                                </Nav.Link>
                            }
                            </>
                            )
                        }
                        
                        </Nav>



                    </Navbar.Collapse>
                </Form>
            </Container>
        </Navbar>
    )
}

export default NavHeader
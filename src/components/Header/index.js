import { useState } from "react";
import './styles.css'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import mundoLivroLogo from '../../images/livro_mundo_livro.png'
import mundoLivroNome from '../../images/Mundo_Livro.png'
import CreateBookModal from '../CreateBookModal'

const Header = ({ hide_links }) => {
    const [showAddBookModal, setShowAddBookModal] = useState(false)

    return (
        <>
            <Navbar bg="" variant='dark' expand="lg" id="navHeader">
                <Container fluid>
                    <Navbar.Brand href="#"> <img src={mundoLivroLogo} alt={"Logo Mundo Livro"} id="logoLivroNav" /> <img src={mundoLivroNome} alt="Mundo Livro" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    {!hide_links && (
                        <Form className="d-flex">
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <LinkContainer to="/home">
                                        <Nav.Link>Home</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/entregas">
                                        <Nav.Link>Entregas</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/meus-livros">
                                        <Nav.Link>Meus Livros</Nav.Link>
                                    </LinkContainer>
                                    <Button style={{ marginLeft: "6px" }} variant="secondary" onClick={() => setShowAddBookModal(true)}>Adicionar Livro</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Form>
                    )}
                </Container>
            </Navbar>
            <CreateBookModal show={showAddBookModal} handleClose={() => setShowAddBookModal(false)} />
        </>
    )
}

export default Header
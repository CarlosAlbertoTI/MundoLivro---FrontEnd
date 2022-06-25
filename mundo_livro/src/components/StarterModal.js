import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const StarterModal = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informação do Campus</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Escolha um Campus</Form.Label>
                            <Form.Select>
                                <option>Pici</option>
                                <option>Benfica</option>
                                <option>Porangabuçu</option>
                                <option>Sobral</option>
                                <option>Quixadá</option>
                                <option>Crateús</option>
                                <option>Russas</option>
                                <option>Itapaje</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StarterModal

import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { FunnelFill } from 'react-bootstrap-icons';
import Categorias from "./Categorias";
import './AdicionarLivroModal.css'
import Select from 'react-select'

const AdicionarLivroModal = props => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <div className="CategoriaModal">

            <Modal show={true} onHide={props.handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome do Livro</Form.Label>
                            <Form.Control type="text" placeholder="Nome do Livro" />
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Categoria do Livro</Form.Label>
                            <Select isMulti={true} options={options} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AdicionarLivroModal

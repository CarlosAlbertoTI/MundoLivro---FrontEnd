import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { FunnelFill } from 'react-bootstrap-icons';
import Categorias from "./Categorias";
import './CategoriaModal.css'

const CategoriaModal = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="CategoriaModal">
            <Button variant='light 'className="rounded-circle" id='filtro' onClick={handleShow}><FunnelFill id='iconFilter' /></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Categorias id='categModal'/>
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CategoriaModal

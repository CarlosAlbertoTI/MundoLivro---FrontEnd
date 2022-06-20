import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { FunnelFill } from 'react-bootstrap-icons';
import Categorias from "./Categorias";

const CategoriaModal = props => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="CategoriaModal">
            <Button variant='light 'className="rounded-circle" id='filtro' onClick={handleShow}><FunnelFill id='iconFilter' /></Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <p>ALO</p>
                    <Categorias />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CategoriaModal

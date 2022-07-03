import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { FunnelFill } from 'react-bootstrap-icons';
import CATEGORIES from "../../consts/categories";
import './styles.css'

const PickCategoriesModal = props => {
    const [show, setShow] = useState(false);
    // TODO: Embelezar as categorias
    return (
        <div className="PickCategoriesModal">
            <Button variant='light 'className="rounded-circle" id='filtro' onClick={() => setShow(true)}><FunnelFill id='iconFilter' /></Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body>
                {
                    CATEGORIES.map(category => (
                        <p key={category}>{category}</p>
                    ))
                }
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PickCategoriesModal

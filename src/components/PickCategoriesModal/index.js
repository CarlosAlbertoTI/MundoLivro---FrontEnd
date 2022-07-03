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
            <Button variant='light ' className="rounded-circle" id='filtro' onClick={() => setShow(true)}><FunnelFill id='iconFilter' /></Button>

            <Modal show={show} onHide={() => setShow(false)}>

                <Modal.Body>
                    <div className='ModalContent'>
                        <div className='categoriaTitle'>
                            <h3 id='title'>Categorias</h3>
                        </div>
                        <div className="categorias">
                            {
                                CATEGORIES.map(category => (
                                    <button className='btnCategoria' onClick={() => {
                                        props.addCategoria(category)
                                    }} key={category}>{category}</button>
                                ))
                            }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div></div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PickCategoriesModal

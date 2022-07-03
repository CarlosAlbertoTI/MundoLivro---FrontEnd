import React from "react";
import { Modal, Button } from "react-bootstrap";
import './styles.css'

const BookInfoModal = ({ children, blocked, show, handleClose, handleBuy, handleCancel, handleConclude, myBook = true }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                {myBook &&(
                    <>
                        {blocked ? (
                            <>
                                <Button variant="danger" onClick={handleCancel}>
                                    Cancelar
                                </Button>
                                <Button variant="success" onClick={handleConclude}>
                                    Concluir
                                </Button>
                            </>
                        ) : (
                            
                            <Button variant="primary" onClick={handleBuy}>
                                Pegar
                            </Button>

                        )}
                    </>
                )}
            </Modal.Footer>
        </Modal>
    )
}

export default BookInfoModal

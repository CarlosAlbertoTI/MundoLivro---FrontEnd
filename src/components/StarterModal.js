import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const StarterModal = (props) => {
    const [phone, setPhone] = useState(0);
    const [campus, setCampus] = useState("");

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Escolha um Campus</Form.Label>
                            <Form.Select  onChange={(value) => {
                                setCampus(value.target.value)
                            }}>
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
                        <Form.Group>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={setPhone} 
                                defaultCountry={"BR"} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() =>{
                            props.handleSave({campus, phone})
                            setCampus("")
                            setPhone(0)
                         }}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default StarterModal

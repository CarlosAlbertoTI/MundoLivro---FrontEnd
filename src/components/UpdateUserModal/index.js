import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const UpdateUserModal = ({ show, handleClose, handleSave }) => {
    const [phone, setPhone] = useState(0);
    const [campus, setCampus] = useState("Pici");

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Informações</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Escolha um Campus</Form.Label>
                        <Form.Select onChange={(value) => {
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
                            value={phone.toString()}
                            onChange={(value) => setPhone(value || 0)}
                            defaultCountry={"BR"} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => {
                    handleSave({ campus, phone })
                    setCampus("Pici")
                    setPhone(0)
                }}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateUserModal

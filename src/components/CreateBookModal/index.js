import { Modal, Button, Form } from "react-bootstrap";
import CATEGORIES from "../../consts/categories";
import { useState } from "react";
import Select from 'react-select'
import api from "../../services/api";

const AdicionarLivroModal = ({ show, handleClose }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XTpjcWRmhxg62phqzs_6F76PCSSqkNUbAA&usqp=CAU')
    const [categories, setCategories] = useState([])

    // TODO: Fazer as páginas darem refresh
    const handleSave = async () => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));
        
        try {
            const response = await api.post(`/user/${user.id}/book`, { name, description, categories, img });

            // Error
            if (response.message) throw new Error(response.message);

            handleClose();

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="CategoriaModal">
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome do Livro</Form.Label>
                            <Form.Control type="text" placeholder="Nome do Livro" onChange={(event) => setName(event.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(event) => setDescription(event.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Link da Imagem</Form.Label>
                            <Form.Control type="text" placeholder="Link da Imagem" onChange={(event) => {
                                setImage(event.target.value)
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Categoria do Livro</Form.Label>
                            <Select isMulti={true} options={CATEGORIES.map(category => ({ value: category.toLowerCase(), label: category }))} onChange={(selectData) => setCategories(selectData.map(({ value }) => value))} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AdicionarLivroModal

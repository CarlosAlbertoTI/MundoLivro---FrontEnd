// @ts-nocheck
import React, { useEffect ,useState} from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import Categorias from './Categorias';
import './Menu.css'
import { FunnelFill } from 'react-bootstrap-icons';
import CategoriaModal from './CategoriaModal';
import StarterModal from './StarterModal';
import { useLocation } from 'react-router-dom'
import Axios from 'axios';

const Menu = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { state } = useLocation();


    const handleShowModal = () => {
        setShowModal((oldValue) => !oldValue)
    }

    const ChangeUserInfo = async (newValue) => {
        const result = await Axios.put('http://localhost:9000/user',{
            "info":"campus",
	        "value":newValue.campus,
	        "id":state.userId
        })
        const result2 = await Axios.put('http://localhost:9000/user',{
            "info":"phone",
	        "value":newValue.phone,
	        "id":state.userId
        })

        handleShowModal()
    }

    useEffect(()=>{
        const {hasCampusAndPhone,data} = state;
        if(!hasCampusAndPhone){
            setShowModal(true)
        }
    },[])

    useEffect(()=>{

    },[])

    return (
        <div>
            <NavHeader home_page={true} />
            <StarterModal show={showModal} handleClose={handleShowModal} handleSave={ChangeUserInfo}/>
            <CategoriaModal />
            <div className='MenuContent'>
                <Categorias id='categorias' />
                <div>
                    <Form className="d-flex searchBar">
                        <FormControl
                            type="search"
                            placeholder=""
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="warning">Search</Button>
                    </Form>
                    <div className='Livros'>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio' href=''>
                            <img src={livroTeste} />
                        </LivroMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
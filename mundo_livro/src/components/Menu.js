import React from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import Categorias from './Categorias';
import './Menu.css'
import { FunnelFill } from 'react-bootstrap-icons';
import CategoriaModal from './CategoriaModal';

const Menu = () => {

    return (
        <div>
            <NavHeader />
            <CategoriaModal />
            <div className='MenuContent'>
                <Categorias id='categorias'/>
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
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                        <LivroMenu titulo='Engenharia de Software Moderna' autor='Marco Túlio'>
                            <img src={livroTeste} />
                        </LivroMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
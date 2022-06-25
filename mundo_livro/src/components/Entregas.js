import React from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import './Entregas.css'


const Entregas = () => {

    return (
        <div>
            <NavHeader entregas={true}/>
            <div className='EntregasContent'>
                <div className='Content'>
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

export default Entregas
import React, { useState } from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import './MeusLivros.css'
import AdicionarLivroModal from './AdicionarLivroModal';


const MeusLivros = () => {

    const[showModalAddLivro, setShowModalAddLivro] = useState(false)


    const handleAddLivros = () => {
        console.log('aaaaaaa')
        setShowModalAddLivro(
            (valorAntigo) => !valorAntigo
        )
    }
 

    return (
        <div>
            {showModalAddLivro && (
                <AdicionarLivroModal handleClose={handleAddLivros}/>
            )}
            <NavHeader meus_livros={true} showLivros={handleAddLivros}/>
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

export default MeusLivros
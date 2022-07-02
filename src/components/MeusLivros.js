import React, { useEffect, useState } from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import './MeusLivros.css'
import AdicionarLivroModal from './AdicionarLivroModal';
import Axios from 'axios'


const MeusLivros = () => {
    const [showModalAddLivro, setShowModalAddLivro] = useState(false)
    const [books, setBooks] = useState([]);
    const userId = localStorage.getItem('userId');

    const handleBuyBook = (bookId) => {
        console.log({userId, bookId, value: true})
        Axios.put('http://localhost:9000/book/buy', {userId, bookId, value: true}).then(response => {
            console.log(response.data)
        })
    }

    const handleAddLivros = (data) => {
        const newCategories = data.optionSelect.map((categorie) => {
            return categorie.value
        })
        Axios.post('http://localhost:9000/book',{id:"", userId, name: data.nomeLivro, description: data.descricaoLivro, categories: newCategories}).then(response => {
        Axios.post('http://localhost:9000/book/user', { userId }).then(response => {
                setBooks(Object.values(response.data.books[0][0]));
        })
        }).catch(e => {
            alert("DEU RUIM")
        })
        return handleShowModalAddLivro()
    }

    const handleShowModalAddLivro = () => {
        setShowModalAddLivro(
            (valorAntigo) => !valorAntigo
        )
    }

    useEffect(() => {
        console.info("ATUALIZE")
        if (userId) {
            Axios.post('http://localhost:9000/book/user', { userId }).then(response => {
                console.log(response.data.books)
                setBooks(Object.values(response.data.books));
            })
        }

    }, [])

    return (
        <div>
            {showModalAddLivro && (
                <AdicionarLivroModal handleClose={handleShowModalAddLivro}  handleSave={handleAddLivros}/>
            )}
            <NavHeader meus_livros={true} showLivros={handleShowModalAddLivro} />
            <div className='EntregasContent'>
                <div className='Content'>
                    <div className='Livros'>
                        {books && books.map((book, index) => (
                            <LivroMenu id={book.id} key={index} handleBuyBook={handleBuyBook} titulo={book.name} autor='Pegar' href=''>
                                <img src={livroTeste} />
                            </LivroMenu>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeusLivros
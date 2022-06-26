import React,{useEffect, useState} from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';
import './Entregas.css'


const Entregas = () => {
    const [books, setBooks] = useState([]);
    const userId = localStorage.getItem('userId');

    const handleBuyBook = (bookId) => {
        Axios.put('http://localhost:9000/book/buy', {userId, bookId, value: false}).then(response => {
            console.log(response.data)
        })
    }

    useEffect(() => {
        console.info("ATUALIZE")
        if (userId) {
            Axios.post('http://localhost:9000/book/user', { userId }).then(response => {
                const bookList = []
                Object.values(response.data.books).forEach((book) => {
                    if(book.blocked != false){
                        bookList.push(book)
                    }
                })
                setBooks(bookList);
            })
        }

    }, [])

    return (
        <div>
            <NavHeader entregas={true}/>
            <div className='EntregasContent'>
                <div className='Content'>
                    <div className='Livros'>
                    {books && books.map((book, index) => (
                            <LivroMenu id={book.id} key={index} titulo={book.name} handleBuyBook={handleBuyBook} autor='Cancelar' href=''>
                                <img src={livroTeste} />
                            </LivroMenu>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entregas
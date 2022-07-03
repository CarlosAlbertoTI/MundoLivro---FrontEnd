import { useEffect, useState } from 'react'
import './styles.css'
import BookTile from '../../components/BookTile'
import Header from '../../components/Header'
import api from '../../services/api'

const Entregas = (props) => {
    // TODO: Fazer o blocked ser o id do usuário
    const [books, setBooks] = useState([]);
    const {id} = JSON.parse(localStorage.getItem('@MundoLivro:user')) 

    // Pega os livros bloqueados
    useEffect(() => {
        api.get('/book').then(response => {
            setBooks(response.data.filter(book => book.blocked ==id));
        })
    }, [])

    return (
        <div>
            <Header />
            <div className='EntregasContent'>
                <div className='Content'>
                    <div className='Livros'>
                        {books.map(book => (
                            <BookTile key={book.id} userId={book.userId} id={book.id} title={book.name} description={book.description} img={book.img} blocked={book.blocked} subtitle='Autor'/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entregas
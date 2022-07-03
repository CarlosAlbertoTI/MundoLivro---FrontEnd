import { useEffect, useState } from 'react'
import './styles.css'
import BookTile from '../../components/BookTile'
import Header from '../../components/Header'
import api from '../../services/api'

const MeusLivros = (props) => {
    const [books, setBooks] = useState([]);

    // Pega os livros do usuário logado
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));

        api.get(`/user/${user.id}/book`).then(response => {
            setBooks(response.data.filter(book => !book.blocked));
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

export default MeusLivros
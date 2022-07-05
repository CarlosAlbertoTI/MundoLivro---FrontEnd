import { useEffect, useState } from 'react'
import './styles.css'
import BookTile from '../../components/BookTile'
import Header from '../../components/Header'
import api from '../../services/api'

const Entregas = (props) => {
    // TODO: Fazer o blocked ser o id do usuário
    const [books, setBooks] = useState([]);
    const { id } = JSON.parse(localStorage.getItem('@MundoLivro:user'))
    const [updated, setShoudUpdate] = useState(false);

    // Pega os livros bloqueados
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));

        api.get(`/user/${user.id}/book`).then(response => {
            setBooks(response.data.filter(book => book.blocked));
        })
    }, [updated])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));

        api.get(`/user/${user.id}/book`).then(response => {
            setBooks(response.data.filter(book => book.blocked));
        })
    }, [])

    return (
        <div>
            <Header />
            <div className='EntregasContent'>
                <div className='Content'>
                    <div className='Livros'>

                        {books.length == 0 && (
                            <div style={{ width: '90%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p>Opa! Parece que ninguem esta interessado nos seus livros no momento!</p>
                            </div>
                        )}
                        {books.length > 0 && (
                            <>
                                {books.map(book => (
                                    <BookTile myBook={true} key={book.id} userId={book.userId} id={book.id} title={book.name} description={book.description} img={book.img} blocked={book.blocked} subtitle='Autor' handleUpdate={() => setShoudUpdate((oldValue) => !oldValue)} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entregas
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
                            <div style={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{
                                    minWidth: '200px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px',
                                    backgroundColor: 'white',
                                    color: 'black',
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                    padding: '10px 40px',
                                }}>
                                    <p>Opa! Parece que ninguem esta interessado nos seus livros no momento!</p>
                                </div>
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
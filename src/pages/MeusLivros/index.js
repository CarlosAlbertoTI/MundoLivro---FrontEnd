import { useEffect, useState } from 'react'
import './styles.css'
import BookTile from '../../components/BookTile'
import Header from '../../components/Header'
import api from '../../services/api'

const MeusLivros = (props) => {
    const [books, setBooks] = useState([]);
    const [updated, setShoudUpdate] = useState(false);

    // Pega os livros do usuário logado
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));

        api.get(`/user/${user.id}/book`).then(response => {
            setBooks(response.data);
        })
    }, [])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));

        api.get(`/user/${user.id}/book`).then(response => {
            setBooks(response.data);
        })
    }, [updated])


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
                                    <p>Opa! Parece que vocé não tem nenhum livro cadastrado! Clique no botão acima para cadastrar!</p>
                                </div>
                            </div>
                        )}
                        {books.length > 0 && (
                            <>
                                {books.map(book => (
                                    <BookTile myBook={false} className='Livro' key={book.id} userId={book.userId} id={book.id} title={book.name} description={book.description} img={book.img} blocked={book.blocked} subtitle={book.author} handleUpdate={() => setShoudUpdate((oldValue) => !oldValue)} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeusLivros
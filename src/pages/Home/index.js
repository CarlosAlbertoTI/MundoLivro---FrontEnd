import { useEffect, useState } from 'react'
import './styles.css'

import { Form, FormControl, Button } from 'react-bootstrap';
import PickCategoriesModal from '../../components/PickCategoriesModal';
import Header from '../../components/Header'
import BookTile from '../../components/BookTile';
import api from "../../services/api"
import CATEGORIES from '../../consts/categories';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [updated, setShoudUpdate] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState("")
    const { id } = JSON.parse(localStorage.getItem('@MundoLivro:user'))


    // Pega todos os livros não bloqueados e que nao sejam meus
    useEffect(() => {
        api.get('/book').then(response => {
            setBooks(response.data.filter(book => {
                console.info(book.userId, " ", id)
                if (!book.blocked & book.userId != id) {
                    return book
                }
            }));
        })
    }, [])

    useEffect(() => {
        api.get('/book').then(response => {
            setBooks(response.data.filter(book => {
                console.info(book.userId, " ", id)
                if (!book.blocked & book.userId != id) {
                    return book
                }
            }));
        })
    }, [updated])



    return (
        <div>
            <Header />
            <PickCategoriesModal addCategoria={(category) => {
                // Se a categoria já está selecionada, limpa ela, se seta normalmente
                setCategoryFilter(categoryFilter === category.toLowerCase() ? "" : category.toLowerCase())
            }} />

            <div className='MenuContent'>
                <div id='categorias'>
                    <div className='colunaCategorias'>
                        <div className='categTitle'>Categorias</div>
                        {CATEGORIES.map(category => (
                            // <div key={category} >
                            <button className='btnCategoria' onClick={() => {
                                // Se a categoria já está selecionada, limpa ela, se seta normalmente
                                setCategoryFilter(categoryFilter === category.toLowerCase() ? "" : category.toLowerCase())
                            }}>{category}</button>
                            // </div>
                        ))}
                    </div>
                </div>
                <div className='bookContent'>
                    <Form className="d-flex searchBar">
                        <FormControl
                            type="search"
                            placeholder=""
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => { setSearchFilter(event.target.value) }}
                        />
                        <Button variant="warning">Search</Button>
                    </Form>
                    <div className='Livros'>
                        {
                            <>
                                {books.length > 0 && (
                                    <>

                                        {books.filter(book => {
                                            // Filtro por nome
                                            return searchFilter === "" || book.name.search(new RegExp(searchFilter, "i")) !== -1
                                        }).filter(book => {
                                            // Filtro por categoria
                                            return categoryFilter === "" || book.categories.includes(categoryFilter)
                                        }).map(book => (
                                            <BookTile myBook={true} key={book.id} userId={book.userId} id={book.id} title={book.name} description={book.description} img={book.img} blocked={book.blocked} subtitle='Autor' handleUpdate={() => setShoudUpdate((oldValue) => !oldValue)} />
                                        ))}
                                    </>

                                )}
                                {books.length == 0 && (
                                    <div style={{ width: '90%', height: '100vh', display: 'flex', justifyContent: 'center' }}>
                                        <p>Que pena! Não a nenhum livro disponivel no momento!</p>
                                    </div>
                                )}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
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
    const [categoryFilter, setCategoryFilter] = useState("")

    // Pega todos os livros não bloqueados
    useEffect(() => {
        api.get('/book').then(response => {
            setBooks(response.data.filter(book => !book.blocked));
        })
    }, [])

    return (
        <div>
            <Header />
            <PickCategoriesModal addCategoria={() => { }} />
            <div className='MenuContent'>
                <div id='categorias'>
                    <div className='colunaCategorias'>
                        <div className='categTitle'>Categorias</div>
                        {CATEGORIES.map(category => (
                            <div key={category}><button onClick={() => {
                                // Se a categoria já está selecionada, limpa ela, se seta normalmente
                                setCategoryFilter(categoryFilter === category.toLowerCase() ? "" : category.toLowerCase())
                            }}>{category}</button></div>
                        ))}
                    </div>
                </div>
                <div>
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
                        {books?.filter(book => {
                            // Filtro por nome
                            return searchFilter === "" || book.name.search(new RegExp(searchFilter, "i")) !== -1
                        }).filter(book => {
                            // Filtro por categoria
                            return categoryFilter === ""  || book.categories.includes(categoryFilter)
                        }).map(book => (
                            <BookTile key={book.id} userId={book.userId} id={book.id} title={book.name} description={book.description} img={book.img} blocked={book.blocked} subtitle='Autor'/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
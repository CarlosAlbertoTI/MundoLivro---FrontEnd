import React, { useEffect, useState } from 'react'
import LivroMenu from './LivroMenu'
import livroTeste from '../images/livro_teste.jpg'
import NavHeader from './Nav.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import Categorias from './Categorias';
import './Menu.css'
import { FunnelFill } from 'react-bootstrap-icons';
import CategoriaModal from './CategoriaModal';
import StarterModal from './StarterModal';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

const Menu = (props) => {
    const [filtros, setFiltros] = useState([])
    const [searchLivro,setSearchLivro] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [showBookList, setShowBookList] = useState(false);
    const [books, setBooks] = useState([]);
    const stateData = useLocation();
    const userId = localStorage.getItem('userId');

    const handleShowModal = () => {
        setShowModal((oldValue) => !oldValue)
    }

    const handleBuyBook = (bookId) => {
        Axios.put('http://localhost:9000/book/buy', {userId, bookId, value: true}).then(response => {
            console.log(response.data)
        })
    }

    const handleAddNewfiltro = (newFilter) => {
        setFiltros((oldValue) => oldValue.push(newFilter))
    }

    const ChangeUserInfo = async (newValue) => {
        const result = await Axios.put('http://localhost:9000/user', {
            "info": "campus",
            "value": newValue.campus,
            "id": stateData?.state.userId
        })
        const result2 = await Axios.put('http://localhost:9000/user', {
            "info": "phone",
            "value": newValue.phone,
            "id": stateData?.state.userId
        })
        handleShowModal()
    }

    useEffect(() => {
        
        if(stateData?.state != null){
            const {hasCampusAndPhone,userId} = stateData.state;
            console.info("TESTE")
            console.info(hasCampusAndPhone)
            if (!hasCampusAndPhone) {
                setShowModal(true)
            } 
        }
    }, [])


    useEffect(()=>{
        Axios.get('http://localhost:9000/book').then(response => {
            const bookList = []
            response.data.books.forEach((book) => {
                    if(book.blocked == false){
                        bookList.push(book)
                    }
                })
            setBooks(bookList)
            setShowBookList(true)
        })
    },[])


    useEffect(()=>{
        const oldBookList = books
        const newBookList = []
        oldBookList.forEach((book) =>{
            if(book.categories.includes(searchLivro)){
                newBookList.push(book)
            }
        })
        console.info("NEWBOOKLIST")
        console.info(newBookList)
    },[filtros])

    useEffect(()=>{
        const oldBookList = books
        const newBookList = []
        oldBookList.forEach((book) =>{
            if(book.HasValue(searchLivro)){
                newBookList.push(book)
            }
        })
        console.info("NEWBOOKLIST")
        console.info(newBookList)
    },[searchLivro])

    return (
        <div>
            <NavHeader home_page={true} />
            <StarterModal show={showModal} handleClose={handleShowModal} handleSave={ChangeUserInfo} />
            <CategoriaModal addCategoria={handleAddNewfiltro}/>
            <div className='MenuContent'>
                <Categorias id='categorias' />
                <div>
                    <Form className="d-flex searchBar">
                        <FormControl
                            type="search"
                            placeholder=""
                            className="me-2"
                            aria-label="Search"
                            onChange={(newValue )=> setSearchLivro(newValue.target.value)}
                        />
                        <Button variant="warning">Search</Button>
                    </Form>
                    <div className='Livros'>
                        {books && books.map((book,index) => (
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

export default Menu
import { useState } from 'react'
import './styles.css'
import api from '../../services/api';
import BookInfoModal from '../BookInfoModal';

const BookTile = ({ userId, id, title, description, img, blocked, subtitle,handleUpdate, myBook = false }) => {
    // TODO: Fazer o autor de vdd
    const [user, setUser] = useState(null);
    const [showBookInfoModal, setShowBookInfoModal] = useState(false);
    const {id:userIdOfWhoWantsTheBook} = JSON.parse(localStorage.getItem('@MundoLivro:user')) 

    // Faz o fetch do usuário a abre o modal
    const handleClickBook = async () => {
        const response = await api.get(`/user/${userId}`);
        if (response.data == null) throw new Error("Usuário não encontrado");

        setUser(response.data);
        setShowBookInfoModal(true);
    }

    // Marca um livro como bloqueado
    const handleBuyBook = async () => {
        try {
            const response = await api.put(`/user/${userId}/book/${id}`, { blocked: userIdOfWhoWantsTheBook });

            // Error
            if (response.message) throw new Error(response.message);
            handleUpdate()
            setShowBookInfoModal(false);
        } catch (err) {
            console.error(err);
        }
    }

    // Desmarca um livro como bloqueado
    const handleCancelBook = async () => {
        try {
            const response = await api.put(`/user/${userId}/book/${id}`, { blocked: false });

            // Error
            if (response.message) throw new Error(response.message);
            handleUpdate()
            setShowBookInfoModal(false);
        } catch (err) {
            console.error(err);
        }
    }

    // Deleta o livro
    const handleConcludeBook = async () => {
        try {
            const response = await api.delete(`/user/${userId}/book/${id}`);

            // Error
            if (response.message) throw new Error(response.message);
            handleUpdate()
            setShowBookInfoModal(false);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className='LivroMenu'>
                <div onClick={handleClickBook}>
                    <div className='LivroImagem'>
                        <img src={img} alt={"Capa"} />
                    </div>
                    <div className='LivroTitulo'>
                        {title}
                    </div>
                </div>
                {subtitle && (
                    <div className='LivroAutor'>
                        {subtitle}
                    </div>
                )}
            </div>
            { showBookInfoModal && (
                <BookInfoModal myBook={myBook} blocked={blocked} show={showBookInfoModal} handleClose={() => setShowBookInfoModal(false)} handleBuy={handleBuyBook} handleCancel={handleCancelBook} handleConclude={handleConcludeBook}>
                    <h2>Infomacões do livro</h2>
                    <p>Titulo: {title}</p>
                    <p>Descricão: {description}</p>
                    <h2>Infomacões do dono</h2>
                    <p>Nome: {user.username}</p>
                    <p>Telefone: {user.phone}</p>
                </BookInfoModal>
            )}
        </>
    )
}

export default BookTile;



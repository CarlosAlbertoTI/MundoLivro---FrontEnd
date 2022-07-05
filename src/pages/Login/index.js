import './styles.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, provider } from '../../services/Firebase';
import googleLogo from '../../images/google-custom.svg'
import mundoLivroLogo from '../../images/livro_mundo_livro.png'
import Header from '../../components/Header'
import api from '../../services/api'
import UpdateUserModal from '../../components/UpdateUserModal';

const Login = () => {
    const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        // Caso o usuário já esteja logado vá para /home
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));
        if (user?.phone !== undefined && user?.campus !== undefined) navigate("/home");
    }, [navigate])

    // Sign in with google
    const signin = async () => {
        // Login popup com google
        await auth.signInWithPopup(provider).catch(alert);
        const { uid: id, email, displayName: username, photoURL: urlPhoto } = auth.currentUser.toJSON();

        // Login no backend
        try {
            const response = await api.post('/login', { id, email, username, urlPhoto });

            // Error
            if (response.message) throw new Error(response.message);

            // Guarda as informacões no storage
            localStorage.setItem('@MundoLivro:user', JSON.stringify(response.data));

            // Invoca o UpdateUserModal
            setShowUpdateUserModal(true);

        } catch (err) {
            console.error(err);
        }
    }

    // Atualiza as informacões do usuário
    const handleUpdateUserData = async ({ campus, phone }) => {
        const user = JSON.parse(localStorage.getItem('@MundoLivro:user'));

        try {
            const response = await api.put(`/user/${user.id}`, { campus, phone });

            // Error
            if (response.message) throw new Error(response.message);

            // Guarda as informacões no storage
            localStorage.setItem('@MundoLivro:user', JSON.stringify(response.data));

            navigate("/home");

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <UpdateUserModal show={showUpdateUserModal} handleClose={() => { setShowUpdateUserModal(false) }} handleSave={handleUpdateUserData} />
            <Header hide_links={true} />
            <div id="containerLogin">
                <div id="loginform">
                    <h2 id="header">Faça Login ou Cadastre-se</h2>
                    <p className='textLogin'>Utilize o E-mail institucional @alu.ufc.br para realizar o login</p>
                    <div id="iconGroup">
                        <div id="button" className="row">
                            <button onClick={signin}> <img src={googleLogo} id="googleLogo" alt={"Logo Google"} /> Continuar com Google</button>
                        </div>
                    </div>
                </div>
                <div id="logoInfo">
                    <img src={mundoLivroLogo} id="logoLivro" alt={"Logo Mundo Livro"} />
                    <p id="logoText">Este é um projeto dos alunos do Curso de Computação, desenvolvido para a cadeira de engenharia de software, O mundoLivro é um projeto que visa facilitar o acesso a livros dentro da comunidade academica da UFC.</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
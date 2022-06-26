import React from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";
import { auth, provider } from './Firebase.js';
import googleLogo from '../images/google-custom.svg'
import mundoLivroLogo from '../images/livro_logo.png'
import NavHeader from './Nav.js'
import Axios from 'axios'

const Login = () => {
    let navigate = useNavigate();

    // Sign in with google
    const signin = async () =>{

        await auth.signInWithPopup(provider).catch(alert);
        const {
            email,
            displayName:username,
            photoURL:urlPhoto,
            phoneNumber:phone 
        } = auth.currentUser.toJSON()
        const id =auth.currentUser.uid

        const result = await Axios.post('http://localhost:9000/login',{id,email,username,urlPhoto,phone})
        const  {message, data} = result.data
        if(message != undefined){
            if(data.campus == "" || data.phone  == 0){
                return navigate("Home",{ replace:true ,state:{hasCampusAndPhone: false,userId:data.id} });
            }
            return navigate("Home",{ replace:true ,state:{hasCampusAndPhone: true,userId:data.id} });
        }
        alert("WE HAD AN ERROR!")
    }

    const Header = props => (
        <h2 id="header">{props.title}</h2>
    );

    const GoogleButton = props => (
        <div id="button" className="row">
            <button style={{}} onClick={()=> {
                signin()

                }}> <img src={googleLogo} id="googleLogo" /> {props.title}</button>
        </div>
    );

    return (
        <div>
            <NavHeader />
            <div id="containerLogin">
                <div id="loginform">
                    <Header title="Faça Login ou Cadastre-se" />
                    <p className='textLogin'>Utilize o E-mail institucional @ufc.br para realizar o login</p>
                    <div id="iconGroup">
                        <GoogleButton title="Continuar com Google" />
                    </div>
                </div>
                <div id="logoInfo">
                    <img src={mundoLivroLogo} id="logoLivro" />
                    <p id="logoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
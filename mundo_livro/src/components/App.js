import '../App.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import {auth} from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Login';
import Mainpage from './Main';
import Menu from './Menu';
import Entregas from './Entregas';
import MeusLivros from './MeusLivros';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [user] = useAuthState(auth);

  return (
    <MeusLivros />
  )

  return (
    <Entregas />
  )

  return (
    <Menu/>
  )

  return (
    user? < Mainpage/> : <Login/>
  );
}

export default App;

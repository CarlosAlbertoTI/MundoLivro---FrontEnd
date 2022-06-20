import '../App.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import {auth} from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Login';
import Mainpage from './Main';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [user] = useAuthState(auth);

  return (
    <Menu/>
  )

  return (
    user? < Mainpage/> : <Login/>
  );
}

export default App;

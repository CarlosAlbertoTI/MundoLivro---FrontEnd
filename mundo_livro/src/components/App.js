import '../App.css';
import { useEffect } from 'react'
import Login from './Login';
import { Container } from 'react-bootstrap';



function App() {

  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh", maxWidth:'800px'}}>
        <Login />
    </Container>
  )

  return (
    <div className='App'>

        Login()

    </div>
  )
}

export default App;

/*
<GoogleLogin
            buttonText="Faça Log in com Email Institucional"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
          /> */
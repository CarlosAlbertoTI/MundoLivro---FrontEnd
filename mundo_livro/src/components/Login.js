import React from 'react';
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'


export default function Login(){

    function handleCallbackResponse(response){
      console.log(response)
    }

    // inicializa e renderiza botão onde tiver id:signInDiv
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
          client_id: process.env.REACT_APP_FIREBASE_CLIENT_ID,
          callback: handleCallbackResponse
        })
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme: "outline", size: "large", shape: "pill"}
        );
    
      }, []);

    return (
      <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Faça Log In com Email Institucional</h2>
          <div className='d-flex align-items-center justify-content-center'>
            <div id='signInDiv'></div>
          </div>
        </Card.Body>
      </Card>
      </>
    )
}
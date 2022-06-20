import React from 'react'
import './LivroMenu.css'

export default props => 
    <div className='LivroMenu'>
        <div className='LivroImagem'>
            {props.children}
        </div>
        <div className='LivroTitulo'>
            {props.titulo}
        </div>
        <div className='LivroAutor'>
            {props.autor}
        </div>
    </div>


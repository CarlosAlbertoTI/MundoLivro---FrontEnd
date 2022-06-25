import React from 'react'
import './LivroMenu.css'

export default props =>
    <div className='LivroMenu'>
        <a href={props.href}>
            <div className='LivroImagem'>
                {props.children}
            </div>
            <div className='LivroTitulo'>
                {props.titulo}
            </div>
            <div className='LivroAutor'>
                {props.autor}
            </div>
        </a>
    </div>


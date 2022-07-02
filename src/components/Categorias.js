import React from 'react'
import './Categorias.css'
import Categoria from './Categoria'

const Categorias = (props) => {
    return (
        <div>
            <div className='colunaCategorias'>
                <div className='categTitle'>Categorias</div>
                <div><Categoria href='' titulo='Administração, Negócios e Economia' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Arte, Cinema e Fotografia Artesanato' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Casa e Estilo de Vida Autoajuda' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Biografias e Histórias Reais Ciências' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Computação, Informática e Mídia' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Digitais Crônicas' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Referência e Didáticos' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Humor e Entretenimento ' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Administração, Negócios e Economia' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Arte, Cinema e Fotografia Artesanato' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Casa e Estilo de Vida Autoajuda' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Biografias e Histórias Reais Ciências' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Computação, Informática e Mídia' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Digitais Crônicas' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Referência e Didáticos' addCategoria={props.handleAddCategoria}/></div>
                <div><Categoria href='' titulo='Humor e Entretenimento ' addCategoria={props.handleAddCategoria}/></div>
            </div>
        </div>
    )
}

export default Categorias
import React from 'react'
import './Categorias.css'
import Categoria from './Categoria'

const Categorias = (props) => {
    return (
        <div className='colunaCategorias'>
            <h3 className='categTitle'>Categorias</h3>
            <Categoria href='' titulo='Administração, Negócios e Economia' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Arte, Cinema e Fotografia Artesanato' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Casa e Estilo de Vida Autoajuda' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Biografias e Histórias Reais Ciências' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Computação, Informática e Mídia' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Digitais Crônicas' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Referência e Didáticos' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Humor e Entretenimento ' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Administração, Negócios e Economia' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Arte, Cinema e Fotografia Artesanato' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Casa e Estilo de Vida Autoajuda' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Biografias e Histórias Reais Ciências' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Computação, Informática e Mídia' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Digitais Crônicas' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Referência e Didáticos' addCategoria={props.handleAddCategoria}/>
            <Categoria href='' titulo='Humor e Entretenimento ' addCategoria={props.handleAddCategoria}/>
        </div>
    )
}

export default Categorias
import React from "react";

export default props => {
    return (
        <div>
            <button className="categoria" onClick={()=>{
                props.AddCategoria(props.titulo)}
                }>{props.titulo}</button>
            <br/>
        </div>
    )
}
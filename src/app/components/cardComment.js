import React from 'react'
import '../css/cardComment.css'
const CardComment = (props) => {
    return (
        <div className="cardComment">
            {/*Icon fontawesome*/}
            <i aria-hidden="true" className="fas fa-quote-left"></i>
            <span>{props.comentario}</span>
            <div className="perfil">
                <div className="circuloImagem">
                    <img className="img-fluid" src={props.imagem} />
                </div>
                <div className="info">
                    <span className="nome">{props.nome}</span>
                    <span className="cargo">{props.cargo}</span>
                </div>
            </div>
        </div>
    )
}

export default CardComment
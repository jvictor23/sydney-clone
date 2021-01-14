import React from 'react'
import '../css/cardComment.css'
const CardComment = (props) => {
    return (
        <div className="cardComment">
            {/*Icon fontawesome*/}
            <i aria-hidden="true" class="fas fa-quote-left"></i>
            <span>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</span>
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
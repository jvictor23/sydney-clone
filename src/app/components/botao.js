import React from 'react';
import '../css/botao.css'

const Botao = (props) => {
    /*Verifica qual o valor passado pelo props e retorna diferente tipo de botao*/
    return props.type === 1 ? (
        /*caso valor seja 1 retorna o botao tipo 1*/
        <button className="button1">{props.text}</button>
    ) : props.type === 2 ? (
        /*caso valor seja 2 retorna o botao tipo 2*/
        <button className="button2">{props.text}</button>
    ) : (
                /*caso valor seja 3 retorna o botao tipo 3*/
                <button className="button3">{props.text}</button>
            )
}

export default Botao
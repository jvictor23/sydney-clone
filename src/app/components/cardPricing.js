import React from 'react'
import '../css/cardPricing.css'
import Botao from '../components/botao'
import Stars from '../images/icons/stars.svg'
const CardPricing = (props) => {
    return (
        <div className="cardPricing">
            <div className="row">

                {props.list.map((item, i) => (
                    i === 1 ? <div className="col-lg-4 colCardPricing" style={{ backgroundColor: '#FFF7F1' }}>

                        <img className="stars" src={Stars} />

                        <span className="titlePlan">{item.titlePlan}</span>
                        <span className="price">{item.price}</span>
                        <span className="month">{item.month}</span>
                        <hr className="hrPricing" />
                        <span className="item">{item.storage}</span>
                        <span className="item">{item.users}</span>
                        <span className="item">{item.domains}</span>
                        <span className="item">{item.time}</span>
                        <div className="botao">
                            <Botao text="Get Started" type={item.typeButton} />
                        </div>
                    </div> : <div className="col-lg-4 colCardPricing">
                            <span className="titlePlan">{item.titlePlan}</span>
                            <span className="price">{item.price}</span>
                            <span className="month">{item.month}</span>
                            <hr className="hrPricing" />
                            <span className="item">{item.storage}</span>
                            <span className="item">{item.users}</span>
                            <span className="item">{item.domains}</span>
                            <span className="item">{item.time}</span>
                            <div className="botao">
                                <Botao text="Get Started" type={item.typeButton} />
                            </div>
                        </div>
                ))}




            </div>
        </div>
    )
}

export default CardPricing
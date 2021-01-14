import React from 'react'
import '../css/cardPricing.css'
import Botao from '../components/botao'
import Stars from '../images/icons/stars.svg'
const CardPricing = () => {
    return (
        <div className="cardPricing">
            <div className="row">
                {/*Coluna 1*/}
                <div className="col-lg-4">
                    <span className="titlePlan">Personal</span>
                    <span className="price">$35</span>
                    <span className="month">Per month</span>
                    <hr className="hrPricing" />
                    <span className="item">5GB Storage</span>
                    <span className="item">500 Users</span>
                    <span className="item">15 Domains</span>
                    <span className="item">1 Year Support</span>
                    <div className="botao">
                        <Botao text="Get Started" type={3} />
                    </div>
                </div>

                {/*Coluna 2*/}
                <div className="col-lg-4" style={{ backgroundColor: '#FFF7F1' }}>

                    <img className="stars" src={Stars} />

                    <span className="titlePlan">Team</span>
                    <span className="price">$95</span>
                    <span className="month">Per month</span>
                    <hr className="hrPricing" />
                    <span className="item">10GB Storage</span>
                    <span className="item">Unlimited Users</span>
                    <span className="item">50 Domains</span>
                    <span className="item">Lifetime Support</span>
                    <div className="botao">
                        <Botao text="Get Started" type={1} />
                    </div>
                </div>

                {/*Coluna 3*/}
                <div className="col-lg-4">
                    <span className="titlePlan">Company</span>
                    <span className="price">$49</span>
                    <span className="month">Per month</span>
                    <hr className="hrPricing" />
                    <span className="item">100GB Storage</span>
                    <span className="item">Unlimited Users</span>
                    <span className="item">20 Domains</span>
                    <span className="item">Lifetime Support</span>
                    <div className="botao">
                        <Botao text="Get Started" type={3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPricing
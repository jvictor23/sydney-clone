import React from 'react'
import '../css/home.css'
import Botao from '../components/botao'
import imgPerfil from '../images/perfil.png'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="pageHeader">
                    <div className="title">
                        <h2>Smart Tool Manage Your Business</h2>
                    </div>
                    <div className="content">
                        <h6>Sydney brings plenty of customization possibilities like access to all Google
                        Fonts, full color control, layout control,logo upload, full screen slider,
                            header image, sticky navigation and much more.</h6>

                        <div className="buttonsHeader">
                            <div className="row">
                                <div className="col-md-6 d-flex justify-content-end">
                                    <Botao text="Start Free Trial" type={1} />
                                </div>
                                <div className="col-md-6">
                                    <Botao text="See Pricing" type={2} />
                                </div>
                            </div>
                        </div>

                        <div className="imgPerfil">
                            <img src={imgPerfil} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
import React from 'react'
import '../css/home.css'
import Botao from '../components/botao'
import imgPerfil from '../images/perfil.png'
import ItemSolution from '../components/itemSolution'
import cartoes from '../images/cartoes.webp'
import ItemList from '../components/itemList'
import Card from '../components/card'
import CardPricing from '../components/cardPricing'
import analyze from '../images/analyze.webp'
import Accordion from '../components/accordion'
import CardApp from '../components/cardApp'
import Carousel from '../components/carousel'
import CardComment from '../components/cardComment'
import mulher from '../images/mulher.webp'
import homem from '../images/homem.webp'
import wave from '../images/icons/wave.svg'
import api from '../api/api'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemSolution: [],
            itemList: [],
            card: [],
            pricing: []
        }
    }

    componentDidMount() {
        this.setState({ itemSolution: api.itemSolution })
        this.setState({ itemList: api.itemList })
        this.setState({ card: api.card })
        this.setState({ pricing: api.pricing })
    }

    render() {

        return (
            <>
                {/*Parte de background da view home*/}
                <div className="background">
                    <img className="wave" src={wave} />
                    <div className="partWave" />
                    <div className="background1" />
                    <div className="background2" />
                    <div className="background3" />
                    <div className="background4" />

                </div>
                <div className="container" style={{ paddingTop: '100px' }}>
                    <div className="pageHeader">
                        <div className="title">
                            {/*Titulo no cabeçalho da pagina*/}
                            <h2>Smart Tool Manage Your Business</h2>
                        </div>
                        <div className="content">
                            {/*Subtitulo do cabeçalho da pagina*/}
                            <h6>Sydney brings plenty of customization possibilities like access to all Google
                            Fonts, full color control, layout control,logo upload, full screen slider,
                            header image, sticky navigation and much more.</h6>

                            {/*Botoes no topo da pagina*/}
                            <div className="buttonsHeader">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Botao text="Start Free Trial" type={1} />
                                    </div>
                                    <div className="col-md-6">
                                        <Botao text="See Pricing" type={2} />
                                    </div>
                                </div>
                            </div>

                            {/*Imagem de perfil*/}
                            <div className="imgPerfil">
                                <img src={imgPerfil} width="100%" />
                            </div>

                            {/*Titulo solutions*/}
                            <h3>Our Solution For You</h3>
                            <h6>Consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis.</h6>

                            {/*solutions*/}
                            <div className="row" style={{ paddingTop: '50px' }}>
                                {this.state.itemSolution.map((item) =>
                                    <div className="col-md-4" style={{ paddingTop: '30px' }}>
                                        {/*Component solution*/}
                                        <ItemSolution type={item.type} icon={item.icon} title={item.title} subtitle={item.subtitle} />
                                    </div>
                                )}
                            </div>

                            <div className="row space">
                                <div className="col-lg-6 d-flex justify-content-center">
                                    <img className="imgCartoes" src={cartoes} />
                                </div>
                                <div className="col-lg-6 ">
                                    <h1 className="titleCards">Simple, Intuitive And Easy To Use</h1>
                                    <h6 className="subtitleCards">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
                                    {this.state.itemList.map((item) => (
                                        /*Component Itens de lista com icone check*/
                                        <ItemList text="The text should be more aligned and in a small" />
                                    ))
                                    }
                                </div>
                            </div>

                            <div className="row space">
                                <div className="col-lg-6">
                                    <h1 className="titleWorkFaster">Work Faster With Powerful Tools.</h1>
                                    <h6 className="subtitleWorkFaster">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
                                    <div className="btnWorkFaster">
                                        <Botao text="Start Free Trial" type={1} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    {/*Component Card com ItemSolution*/
                                        this.state.card.map((card, i) => (
                                            /*Se a posição de i for impar o card recebe o float rigth*/
                                            i % 2 !== 0 ?
                                                <Card float="right">
                                                    <ItemSolution icon={card.icon} type={card.type} title={card.title} subtitle={card.subtitle} />
                                                </Card> : <Card >
                                                    <ItemSolution icon={card.icon} type={card.type} title={card.title} subtitle={card.subtitle} />
                                                </Card>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="space">
                                <h1 className="titlePricing">Get In Reasonable Pricing Plean</h1>
                                <h6 className="subtitlePricing">Consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis.</h6>
                                {/*Component de planos e preços*/}
                                <CardPricing list={this.state.pricing} />
                            </div>

                            <div className="space">
                                <div className="row">
                                    <div className="col-lg-6 d-flex justify-content-center">
                                        <div>
                                            {/*image analyze your data*/}
                                            {/*img-fluid classe boostrap para responsividade de imagens*/}
                                            <img className="img-fluid" src={analyze} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="titleAnalyze">Analyze Your Data With Our Analyze Tools</h1>
                                        <h6 className="subtitleAnalyze">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
                                        {/*Component Accordion*/}
                                        <Accordion />
                                    </div>
                                </div>
                            </div>

                            {/*Espaço duplo*/}
                            <div className="space" />
                            <div className="space">
                                <h1 className="title7Days">Start Your 7 Days Free Trial!</h1>
                                <h6 className="subtitle7Days">SYDNEY is Just What Your Business Needs  adipiscing elit ut elit tellus luctus</h6>
                                <div className="row" style={{ paddingTop: '50px' }}>
                                    <div className="col-lg-6 appCard">
                                        {/*Component CardApp*/}
                                        <CardApp type={1} app="App Store">
                                            {/*Icone fontawesome*/}
                                            <i aria-hidden="true" className="fab fa-apple" style={{ fontSize: '55px', color: 'white' }}></i>
                                        </CardApp>
                                    </div>
                                    <div className="col-lg-6 appCard">
                                        {/*Component CardApp*/}
                                        <CardApp type={2} app="App Store">
                                            {/*Icone fontawesome*/}
                                            <i aria-hidden="true" className="fab fa-google-play" style={{ fontSize: '55px', color: '#7575DA' }}></i>
                                        </CardApp>
                                    </div>
                                </div>
                            </div>

                            {/*Espaço Duplo*/}
                            <div className="space" />
                            <div className="space">
                                {/*Component Carousel*/}
                                <Carousel />
                            </div>

                            <div className="space">
                                <div className="row">
                                    <div className="col-lg-6 d-flex justify-content-center">
                                        {/*Component card comentario*/}
                                        <CardComment imagem={mulher} nome="Amanda Lee" cargo="Ceo & Founder Crix" />
                                    </div>

                                    <div className="col-lg-6 d-flex justify-content-center c">
                                        <CardComment imagem={homem} nome="Adam Cheise" cargo="Head Of Sales , Intel" />
                                    </div>
                                </div>
                            </div>

                            <div className="space" />
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default Home
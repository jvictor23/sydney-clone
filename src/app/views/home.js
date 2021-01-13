import React from 'react'
import '../css/home.css'
import Botao from '../components/botao'
import imgPerfil from '../images/perfil.png'
import ItemSolution from '../components/itemSolution'
import pincel from '../images/icons/pincel.svg'
import engrenagem from '../images/icons/engrenagem.svg'
import nuvem from '../images/icons/nuvem.svg'
import escudo from '../images/icons/escudo.svg'
import mao from '../images/icons/mao.svg'
import falante from '../images/icons/falante.svg'
import cartoes from '../images/cartoes.webp'
import ItemList from '../components/itemList'
import Card from '../components/card'
import Database from '../images/icons/database.svg'


class Home extends React.Component {
    render() {
        return (
            <div className="container">
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
                                <div className="col-md-6 d-flex justify-content-end">
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

                        {/*Primeira fileira solutions*/}
                        <div className="row" style={{ paddingTop: '50px' }}>
                            <div className="col-md-4">
                                {/*Component solution*/}
                                <ItemSolution type={1} icon={pincel} title="Professional tools" subtitle="Ipsum pendisse ultrices gravida accumsan lacus." />
                            </div>
                            <div className="col-md-4">
                                <ItemSolution type={2} icon={engrenagem} title="Fully customizable" subtitle="Ipsum pendisse ultrices eyso gravida accumsan lacus." />
                            </div>
                            <div className="col-md-4">
                                <ItemSolution type={1} icon={nuvem} title="Saved to the cloud" subtitle="Quis ipsum pendisse ultrices gravida accumsan lacus." />
                            </div>
                        </div>

                        {/*Segunda fileira solutions*/}
                        <div className="row" style={{ paddingTop: '50px' }}>
                            <div className="col-md-4">
                                <ItemSolution type={2} icon={escudo} title="App integration" subtitle="Ipsum pendisse ultrices eyso gravida accumsan lacus." />
                            </div>
                            <div className="col-md-4">
                                <ItemSolution type={1} icon={mao} title="Eassy to use" subtitle="Ipsum pendisse ultrices eyso gravida accumsan lacus." />
                            </div>
                            <div className="col-md-4">
                                <ItemSolution type={2} icon={falante} title="Maketing" subtitle="Ipsum pendisse ultrices eyso gravida accumsan lacus." />
                            </div>
                        </div>

                        <div className="row space">
                            <div className="col-6">
                                <img className="imgCartoes" src={cartoes} />
                            </div>
                            <div className="col-6">
                                <h1 className="titleCards">Simple, Intuitive And Easy To Use</h1>
                                <h6 className="subtitleCards">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
                                {/*Component Itens de lista com icone check*/}
                                <ItemList text="The text should be more aligned and in a small" />
                                <ItemList text="Contrary to popular belief, Lorem Ipsum is not simply" />
                                <ItemList text="All the Lorem Ipsum generators on the Internet tend" />
                                <ItemList text="Sed ut perspiciatis unde omnis iste natus error sit" />
                                <ItemList text="All the Lorem Ipsum generators on the Internet tend" />
                            </div>
                        </div>

                        <div className="row space">
                            <div className="col-6">
                                <h1 className="titleWorkFaster">Work Faster With Powerful Tools.</h1>
                                <h6 className="subtitleWorkFaster">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h6>
                                <Botao text="Start Free Trial" type={1} />
                            </div>
                            <div className="col-6">
                                {/*Component Card com ItemSolution*/}
                                <Card>
                                    <ItemSolution icon={Database} type={2} title="Analyze Your Data" subtitle="Click edit button to change this text lorem ipsum dolor sit amet tellus." />
                                </Card>

                                <Card float="right">
                                    <ItemSolution icon={Database} type={2} title="Analyze Your Data" subtitle="Click edit button to change this text lorem ipsum dolor sit amet tellus." />
                                </Card>

                                <Card>
                                    <ItemSolution icon={Database} type={2} title="Analyze Your Data" subtitle="Click edit button to change this text lorem ipsum dolor sit amet tellus." />
                                </Card>
                            </div>
                        </div>



                    </div>
                </div>
            </div >
        )
    }
}

export default Home
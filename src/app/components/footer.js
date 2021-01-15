import React from 'react'
import logo from '../images/logo.webp'
import '../css/footer.css'
import SocialMedia from '../components/socialMedia'
import ContactInfo from '../components/contactInfo'
const Footer = () => {
    return (
        /*Footer*/
        <footer className=" text-center text-lg-start footer">
            {/*Container*/}
            <div className="container-xl d-flex align-items-center">
                {/*Div que esta pegando todo conteudo*/}
                <div className="contain">
                    <div className="row">
                        {/*Coluna 1*/}
                        <div className="col-lg-4  mb-4 mb-md-0 align-items-start">
                            {/*Logo*/}
                            <img className="logo" src={logo} />

                            <span className="descricao">Eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida lacus vel facilisis.</span>

                            {/*Component SocialMedia*/}
                            <div style={{ paddingTop: '50px', paddingLeft: '15px' }}>
                                <SocialMedia />
                            </div>
                        </div>

                        {/*Coluna 2*/}
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="py-3">Company</h5>

                            <ul className="list-unstyled py-4">
                                <li>
                                    <a href="#!">Company</a>
                                </li>
                                <li>
                                    <a href="#!">About</a>
                                </li>
                                <li>
                                    <a href="#!">Teams</a>
                                </li>
                                <li>
                                    <a href="#!">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>


                        {/*Coluna 3*/}
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="py-3">Products</h5>

                            <ul className="list-unstyled mb-0 py-4">
                                <li>
                                    <a href="#!">Pricing</a>
                                </li>
                                <li>
                                    <a href="#!">Feature</a>
                                </li>
                                <li>
                                    <a href="#!">Blog</a>
                                </li>
                                <li>
                                    <a href="#!">Documentation</a>
                                </li>
                            </ul>
                        </div>


                        {/*Coluna 4*/}
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 align-items-start">
                            <h5 className="py-3">Contact info</h5>
                            <ContactInfo />
                        </div>

                    </div>
                </div>

            </div>



            <div className="text-start p-3" style={{ backgroundColor: '#111115', color: 'white', fontSize: '15px', fontWeight: '300' }}>
                <div className="container">
                    Proudly powered by WordPress | Theme: Sydney Pro by aThemes.
                </div>
            </div>

        </footer>

    )
}

export default Footer
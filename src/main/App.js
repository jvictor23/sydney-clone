import React from 'react';
import Routes from './routes'
import Navbar from '../app/components/navbar'
import Footer from '../app/components/footer'

const App = () => (
  <>
    {/*Componente de barra de navegacao - navbar*/}
    <Navbar />

    {/*Componente de rotas*/}
    <Routes />

    {/*Componente de rodapé Footer*/}
    <Footer />

  </>
)

export default App
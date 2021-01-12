import React from 'react';
import Routes from './routes'
import Navbar from '../app/components/navbar'

const App = () => (
  <>
    {/*Componente de barra de navegacao*/}
    <Navbar />

    {/*Componente de rotas*/}
    <Routes />
  </>
)

export default App
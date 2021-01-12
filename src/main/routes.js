import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../app/views/home';

//Criando as rotas
const Routes = () => {
    <BrowserRouter>
        <Switch>
            {/*Chamando o component view Home*/}
            <Route exact path='/' component={Home} />
        </Switch>
    </BrowserRouter>
}
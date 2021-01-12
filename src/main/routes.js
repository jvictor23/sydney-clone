import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../app/views/home';

//Criando as rotas
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes
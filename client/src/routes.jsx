import { BrowserRouter, Route } from 'react-router-dom';
import {MainPage} from './components';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path = '/' exact component={MainPage}/>
        </BrowserRouter>
    );
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
<App />
    </BrowserRouter >
    , document.getElementById('root'));
=======
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
>>>>>>> 2cfecc1ae96beac9c840ad165c8fbb1f2dc911b4

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

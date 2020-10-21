import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

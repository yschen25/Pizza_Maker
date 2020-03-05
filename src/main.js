import './css/normalize.css';
import './scss/main.scss';
import './scss/mobile.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Pizza from './component/main/main';

ReactDOM.render(
    <Provider store={store}>
        <Pizza />
    </Provider>,
    document.getElementById('app')
);

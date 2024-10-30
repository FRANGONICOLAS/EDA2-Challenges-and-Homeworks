import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './10-redux/store/store';
import { Registro } from './10-redux/Registro';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Registro />
        </BrowserRouter>
    </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import propertyStore from './store/app-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={propertyStore}>
    <App />
    </Provider>
);

// style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(322px, 66px);"
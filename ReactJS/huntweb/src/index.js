import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import * as serviceWorker from './serviceWorker';

// Rendereiza o primeiro componente chamado App e jogando o seu conteúdo para a div com id 'root'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

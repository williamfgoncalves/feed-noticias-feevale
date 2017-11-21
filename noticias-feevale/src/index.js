import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'; 

var config = {
    apiKey: "AIzaSyBh6ES0Wr0XNRbe3pbkJ1KZzycWhSqvA9Q",
    authDomain: "noticias-feevale.firebaseapp.com",
    databaseURL: "https://noticias-feevale.firebaseio.com",
    projectId: "noticias-feevale",
    storageBucket: "noticias-feevale.appspot.com",
    messagingSenderId: "236069914669"
};

firebase.initializeApp(config);

ReactDOM.render( < App /> , 
document.getElementById('root')); 
registerServiceWorker(); 

import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';



export let renderMyApp = (myState) => {
    ReactDOM.render(
        <BrowserRouter>
        <App    state={store.getState()} 
                dispatch={store.dispatch.bind(store)} 
                />
        </BrowserRouter>, document.getElementById('root'));
}

renderMyApp(store.getState());

store.subscribe( ()=>{
        let state = store.getState();
        renderMyApp(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import emptyReducers from './reducers/reducer-answers';
import * as serviceWorker from './serviceWorker';
import PageRoutes from "./PageRoutes";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    emptyReducers,  composeWithDevTools()
);

ReactDOM.render(<Provider store={store}>
    <PageRoutes />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

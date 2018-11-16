import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

class PageRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Home} exact />
                    <Route path="/quiz" component={App}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default PageRoutes;
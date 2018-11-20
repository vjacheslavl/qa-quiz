import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import logo from "./images/qa_logo.png";
import CompletedPage from "./components/CompletedPage";

class PageRoutes extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center mb-4"><img src={logo}/></div>
                <BrowserRouter>
                    <div>
                        <Route path="/" component={Home} exact/>
                        <Route path="/quiz" component={App}/>
                        <Route path="/completed" component={CompletedPage}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default PageRoutes;
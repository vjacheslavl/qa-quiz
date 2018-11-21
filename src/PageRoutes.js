import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import CompletedPage from "./components/CompletedPage";
import ResultsPage from "./components/ResultsPage";

class PageRoutes extends Component {
    render() {
        return (
            <div className="container">
                <video muted loop id="myVideo" autoPlay preload="auto">
                    <source src={require("./hex.mp4")} type="video/mp4"/>
                </video>

                <div className="logo">
                    <img src={require("./logo.svg")}/>
                </div>

                <div className="content">
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={Home} exact/>
                            <Route path="/quiz" component={App}/>
                            <Route path="/completed" component={CompletedPage}/>
                            <Route path="/processed" component={ResultsPage}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default PageRoutes;

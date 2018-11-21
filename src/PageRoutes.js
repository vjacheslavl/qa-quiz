import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import CompletedPage from "./components/CompletedPage";

class PageRoutes extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center mb-4"><img src={logo}/></div>

                <video muted loop id="myVideo" autoPlay preload="auto">
                    <source src={require("./hex.mp4")} type="video/mp4"/>
                </video>
                <div className="content">
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={Home} exact/>
                            <Route path="/quiz" component={App}/>
                            <Route path="/completed" component={CompletedPage}/>
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default PageRoutes;

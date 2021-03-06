import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "main/Main";
import Contact from "contact/Contact";
import Header from "common/Header";
import Footer from "common/Footer";
import NotFound from "notfound/NotFound";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter onScroll={this.handleScroll}>
                <Route exact path={["/"]} component={Header} />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
                <Route exact path={["/"]} component={Footer} />
            </BrowserRouter>
        );
    }
}

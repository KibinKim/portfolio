import React, { Component } from "react";
import Main from "main/Main";
import Header from "common/Header";
import Footer from "common/Footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

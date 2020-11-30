import React, { Component } from "react";
import Main from "main/Main";
import Header from "common/Header";
import Footer from "common/Footer";
import { Container } from "common/styleUtil";

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Main />
                <Footer />
            </Container>
        );
    }
}

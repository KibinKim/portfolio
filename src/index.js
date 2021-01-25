import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import { store } from "common/config";
import Main from "main/Main";
import Contact from "contact/Contact";
import Header from "common/Header";
import Footer from "common/Footer";
import NotFound from "notfound/NotFound";

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { Main, Contact, Header, Footer, NotFound };

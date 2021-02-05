import React from "react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "common/styleUtil";
import { Provider } from "react-redux";

const Root = ({ store }) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    );
};

export default Root;

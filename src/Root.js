import React from "react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "common/styleUtil";

const Root = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    );
};

export default Root;

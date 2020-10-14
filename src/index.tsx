import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";

import App from "./app";
import {basename} from "../config";
import {theme} from "./styles/theme";

ReactDOM.render(
    (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router basename={basename}>
                <App />
            </Router>
        </ThemeProvider>
    ),
    document.getElementById("root")
);
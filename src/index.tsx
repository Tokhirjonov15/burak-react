import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import {BrowserRouter as Router} from "react-router-dom";
import "./css/index.css";
import ContextProvider from "./app/context/ContextProvide";

const container = document.getElementById("root")!;
const root = createRoot(container);

// Global Integration: REDUX, MUI, ROUTER... CONTEXT, REACTQUERY, APOLLO ...
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

// React bu library. U bizga component based, declarative SPA qurib beradi
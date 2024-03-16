import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";

import App from "@/App.tsx";

import { GlobalStyles } from "@mui/material";

const globalStyles = {
  html: { scrollbarGutter: "stable" },
  body: { scrollbarGutter: "stable" },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles styles={globalStyles} />
      <App />
    </Provider>
  </React.StrictMode>
);

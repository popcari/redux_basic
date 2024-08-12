import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// reducers
import userSlice from "./features/user";
import themeSlice from "./features/theme";
import spinnerSlice from "./features/spinner";
import Spinner from "./component/Spinner";

const store = configureStore({
  reducer: { user: userSlice, theme: themeSlice, spinner: spinnerSlice },
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Spinner />
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

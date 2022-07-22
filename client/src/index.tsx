import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { parseCookie } from "./lib/utils";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { userActions } from "./store/userSlice";

const loadUser = () => {
  const accessToken = parseCookie(document.cookie).accessToken;

  if (accessToken) store.dispatch(userActions.setUserLoggedIn());
};

loadUser();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

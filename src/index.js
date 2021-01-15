import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/index";
import { swInit, swUpdate } from "./redux/actions";
import I18nProvider from "./i18n/I18nProvider";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <I18nProvider>
      <App />
    </I18nProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onSuccess: () => store.dispatch(swInit({ state: true })),
  onUpdate: (registration) => store.dispatch(swUpdate({ registration })),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

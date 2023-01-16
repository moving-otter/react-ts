import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import rootReducer from "@store";
import { Home } from "./home/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyC5NnEXy55OCkX0rY46TK-Nz2suCV201W4",
  authDomain: "hw-site.firebaseapp.com",
  projectId: "hw-site",
  storageBucket: "hw-site.appspot.com",
  messagingSenderId: "230730258467",
  appId: "1:230730258467:web:a7ed10b992db3cc7477996"
});

console.log("[react-ts] build by ZOL");

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);

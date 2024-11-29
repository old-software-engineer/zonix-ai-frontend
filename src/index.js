import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EventType, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./auth-config";

let msalInstance;

if (typeof window !== "undefined" && window.crypto?.subtle) {
  msalInstance = new PublicClientApplication(msalConfig);

  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });
} else {
  console.error("Web Crypto API is not available. MSAL cannot function.");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(msalInstance ? <App instance={msalInstance} /> : <div>Web Crypto API is not available.</div>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

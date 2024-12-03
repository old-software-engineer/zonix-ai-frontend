import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { EventType, PublicClientApplication } from '@azure/msal-browser';
<<<<<<< Updated upstream
=======
// import { msalConfig } from './auth-config';
>>>>>>> Stashed changes

const pca = new PublicClientApplication({
  auth: {
    clientId: '0b356004-4cfc-4566-8907-d25042d420b8',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: '/'
  }
})

pca.addEventCallback(event => {
  if(event.eventType === EventType.LOGIN_SUCCESS){
    console.log("==================== Event : ",event);
    pca.setActiveAccount(event.payload.account);
  }
}
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App msalInstance = {pca}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

import React from "react";
import { MsalProvider } from "@azure/msal-react";
import "./global.css";
import { loginRequest } from "./auth-config";
import LandingPage from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";

const App = ({ instance }) => {
  const handleLogin = () => {
    instance
      .loginPopup({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };

  return (
    <MsalProvider instance={instance}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage/>}/> */}
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;

import React, { useState } from "react";
import { MsalProvider } from "@azure/msal-react";
import "./global.css";
import { loginRequest } from "./auth-config";
import LandingPage from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Home from './screens/Home'
const App = ({ instance }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    instance
      .loginPopup({
        ...loginRequest,
        prompt: "create",
      })
      .then((response) => {
        console.log("Login success", response);
        setIsAuthenticated(true); // Update state after successful login
      })
      .catch((error) => {
        console.error("Login error", error);
        alert("Login failed. Please try again.");
      });
  };

  return (
    <MsalProvider instance={instance}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
<<<<<<< Updated upstream
          {/* <Route path="/home" element={isAuthenticated ? <HomePage /> : <LandingPage onLogin={handleLogin} />} /> */}
=======
          <Route path="/home" element={<Home/>} />
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;

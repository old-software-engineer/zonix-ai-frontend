import React, { useState } from "react";
import { MsalProvider } from "@azure/msal-react";
import "./global.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import CreateTeam from "./components/Teams/CreateTeam";
import TeamOverview from "./components/Teams/TeamOverview";
import Callback from "./components/Callbacks";

const App = ({ msalInstance }) => {
  // State to track token presence
  const [tokenPresent, setTokenPresent] = useState(
    Boolean(localStorage.getItem("token"))
  );

  const handleLogin = () => {
    window.location.href = "http://localhost:8000/auth/login";
  };

  // Effect to monitor token presence in localStorage
  // useEffect(() => {
  //   const storedToken = Boolean(localStorage.getItem("token"));
  //   setTokenPresent(storedToken);
  // }, []); // Runs once on mount to sync state with localStorage

  return (
    <MsalProvider instance={msalInstance}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage/>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute tokenPresent={tokenPresent}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project/new"
            element={
              <ProtectedRoute tokenPresent={tokenPresent}>
                <CreateTeam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project/:id"
            element={
              <ProtectedRoute tokenPresent={tokenPresent}>
                <TeamOverview />
              </ProtectedRoute>
            }
          />
          <Route path="/auth/callback" element={<Callback />} />
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;

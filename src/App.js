import React, { useState } from "react";
import { MsalProvider } from "@azure/msal-react";
import "./global.css";
import LandingPage from "./page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./page/HomePage";
import CreateTeam from "./components/Teams/CreateTeam";
import TeamOverview from "./components/Teams/TeamOverview";

const App = ({ msalInstance }) => {
  // State to track token presence
  const [tokenPresent, setTokenPresent] = useState(
    Boolean(localStorage.getItem("token"))
  );

  const handleLogin = () => {
    console.log("Handle login called......");
    msalInstance
      .loginPopup({
        scopes: ["user.read", "Team.ReadBasic.All", "TeamMember.Read.All"],
        prompt: "login", // Force the user to re-enter credentials
      })
      .then((response) => {
        console.log("Login success", response);
        const token = response.accessToken; // Get the token from the response
        localStorage.setItem("token", token); // Save token to localStorage
        setTokenPresent(true); // Update state to indicate the token is present
      })
      .catch((error) => {
        console.error("Login error", error);
        alert("Login failed. Please try again.");
      });
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
              <LandingPage instance={msalInstance} handleLogin={handleLogin} />
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
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;

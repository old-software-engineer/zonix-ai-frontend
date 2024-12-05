import React, { useState } from "react";
import "./global.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import CreateTeam from "./components/Teams/CreateTeam";
import TeamOverview from "./components/Teams/TeamOverview";
import Callback from "./components/Callbacks";
import Home from "./screens/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // State to track token presence
  const [tokenPresent, setTokenPresent] = useState(
    Boolean(localStorage.getItem("access_token"))
  );

  return (
    <div>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        draggable
      />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <LandingPage/>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute tokenPresent={tokenPresent}>
                <Home />
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
    </div>
  );
};

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useMsal } from "@azure/msal-react";
import Navbar from "../components/NavBar";

const HomePage = () => {

  const navigate = useNavigate()

  const { instance } = useMsal();

  const handleLogout = () => {
      instance.logoutRedirect({
        account: instance.getActiveAccount(),
        postLogoutRedirectUri: "/"
      });
      navigate('/')
    };
  return (
    <div>
      <Navbar />
      <button className="bg-blue-500 text-white px-4 py-4">
        Manage Project
      </button>
      <button className="bg-blue-500 text-white px-4 py-4" onClick={handleLogout}>
        Logout
      </button>
        <Footer />
    </div>
  );
};

export default HomePage;

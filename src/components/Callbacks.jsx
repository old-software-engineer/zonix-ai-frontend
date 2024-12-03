import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      try {
        const response = await fetch(`http://localhost:8000/auth/callback?code=${code}`, {
          method: "GET",
        });
                
        if (!response.ok) {
          throw new Error("Failed to fetch access token");
        }

        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);

        navigate("/home");
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;

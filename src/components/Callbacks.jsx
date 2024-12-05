import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Callback = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/callback?code=${code}`, {
          method: "GET",
        });
                
        if (!response.ok) {
          throw new Error("Failed to fetch access token");
        }
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        toast.success("Logged in successfully.")
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  return <div>Loading...</div>;
};

export default Callback;

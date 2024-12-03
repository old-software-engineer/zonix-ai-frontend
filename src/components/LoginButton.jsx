import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:8000/auth/login";
  };

  return <button className="text-white" onClick={handleLogin}>Log in with Microsoft</button>;
};

export default LoginButton;
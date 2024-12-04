import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/login`;
  };

  return <button className="px-10 py-3 text-white" onClick={handleLogin}>Log in with Microsoft</button>;
};

export default LoginButton;
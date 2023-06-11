import React from "react";
import Login from "../components/Auth/Login.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;

import React, { useEffect } from "react";
import SignUp from "../components/Auth/Signup.jsx";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;

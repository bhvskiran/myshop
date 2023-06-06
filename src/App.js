import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage, SignUpPage, ActivationPage } from "./Routes.js";
import "./App.css";
import axios from "axios";
import { server } from "./server.js";

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${server}/user/getuser`, {
          withCredentials: true,
        });
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;

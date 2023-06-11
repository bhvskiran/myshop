import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../server";
import styles from "../styles/styles";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (error) {
          console.log(error.response.data.message);
          setError(true);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your Token is expired!</p>
      ) : (
        <>
          <p>Your account has been created successfully!</p>
          <p>Please login to continue!</p>
          <Link to="/login" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#FFF] font-[Poppins] text-[18px]">
                Login
              </span>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default ActivationPage;

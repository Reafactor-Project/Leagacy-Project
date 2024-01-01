"use client";
import React, { useState } from "react";
import axios from "axios";
import { useIdentity } from "../../AuthorContext/IdentityContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// import TopHeader from "../../home/TopHeader";
// import Header from "../../home/Header";
// import Footer from "../../home/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import "../login/SignIn.css";

const SignIn = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useIdentity();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/BuyMeAll/signin",
        {
          user_phOrEmail: userEmail,
          user_password: userPassword,
        }
      );

      const { tok, id } = response.data;

      if (id && tok) {
        Cookies.set("authToken", tok, { expires: 60 * 60 * 24 });
        setUser(response.data);
        setErrorMessage("");
        setSuccessMessage("Login successful");

        response.data.user_role === "admin"
          ? router.push(`/admin/${response.data.id}`)
          : response.data.user_role === "seller"
          ? router.push(`/seller/${response.data.id}`)
          : router.push(`/`);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setErrorMessage("Error during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="divSignIn">
        {/* <TopHeader /> */}
        {/* <Header value={3} /> */}

        <div className="divS21">
          <div className="divS22">
            <div className="col">
              <div className="divS23">
                <img
                  loading="lazy"
                  srcSet="https://i.ibb.co/XS8RQzm/intro.gif"
                  className="imgIn2"
                />
              </div>
            </div>
            <div className="col-2">
              <div className="divS24">
                <div className="divS25">Log in to Exclusive</div>
                <div className="divS26">Enter your details below</div>
                <div className="divS29">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Email or Phone Number"
                      variant="standard"
                      onChange={(event) => {
                        setUserEmail(event.target.value);
                      }}
                    />
                  </Box>
                </div>
                <div className="divS31">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Password"
                      variant="standard"
                      onChange={(event) => {
                        setUserPassword(event.target.value);
                      }}
                    />
                  </Box>
                </div>
                <div
                  className="divS33"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Log In
                </div>

                <div className="divS37">
                  <Link href="/register">
                    {/* <a className="divS38">Don't have an account? Sign Up</a> */}
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <style jsx>{`
        // Add your styles here
      `}</style>
    </>
  );
};

export default SignIn;

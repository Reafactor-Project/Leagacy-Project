"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useIdentity } from "../../AuthorContext/IdentityContext";
import Cookies from "js-cookie";
import Link from "next/link";

import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import TopHeader from "../../home/TopHeader";
import Footer from "../../home/Footer";
const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [role, setRole] = useState("client");
  const { user, setUser, clearUser } = useIdentity();

  //   const { setUser } = useIdentity();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/BuyMeAll/signup",
        {
          user_name: username,
          user_phOrEmail: userEmail,
          user_password: userPassword,
          user_role: role,
        }
      );

      const { user_phOrEmail, user_name, tok, id } = response.data;

      if (user_phOrEmail && user_name && tok) {
        Cookies.set("authToken", tok, { expires: 7 });
        setUser(response.data);

        setSuccessMessage("Registration successful");
        setErrorMessage("");
        response.data.user_role === "admin"
          ? router.push(`/admin/${response.data.id}`)
          : response.data.user_role === "seller"
          ? router.push(`/seller/${response.data.id}`)
          : router.push(`/`);
      } else {
        setSuccessMessage("");
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error during registration. Please try again.");
      console.error("Error during registration:", error);
    }
  };
  //   const router = useRouter();

  return (
    <>
      <div className="divSignUp">
        <TopHeader />
        {/* <Header value={3} /> */}

        <div className="divUp21">
          <div className="divUp22">
            <div className="col">
              <div className="divUp23">
                <img
                  loading="lazy"
                  srcSet="https://i.ibb.co/XS8RQzm/intro.gif"
                  className="imgUp2"
                />
              </div>
            </div>
            <div className="col-2">
              <div className="divUp24">
                <div className="divUp25">Create an account</div>
                <div className="divUp26">Enter your details below</div>
                <div className="divUp27">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "35ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="standard"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </Box>
                </div>
                <div className="divUp29">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "35ch" },
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
                <div className="divUp31">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "35ch" },
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
                <div className="role">
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Role
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={role}
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    >
                      <FormControlLabel
                        value="client"
                        control={<Radio />}
                        label="Client"
                      />
                      <FormControlLabel
                        value="seller"
                        control={<Radio />}
                        label="Seller"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div
                  className="divUp33"
                  onClick={() => {
                    handleSignup();
                  }}
                >
                  Create Account
                </div>
                <div className="divUp34">
                  <div className="divUp35">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6375a6a69051bfc043033cd291b0f7987b1438bb083d10da7d992f6aca588e1?"
                      className="imgUp3"
                    />
                    <div className="divUp36">Sign up with Google</div>
                  </div>
                </div>
                <div className="divUp37">
                  <div className="divUp38">Already have account?</div>
                  <div className="divUp39">
                    <Link href="/login">
                      {/* <a className="divUp40">Log in</a> */}
                      login
                    </Link>
                    <img
                      loading="lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                      className="imgUp4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;

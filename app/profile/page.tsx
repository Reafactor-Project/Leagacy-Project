"use client";
import React, { useState } from "react";
// import {useLocation,Link} from 'react-router-dom'
import { NextPage } from "next";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import "./side.css";

interface ProfileProps {
  user: {
    id: number;
  } | null;
}

const Profile: NextPage<ProfileProps> = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [previousPassword, setPreviousPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [photo, setPhoto] = useState<string | null>(null);
  const id = user?.id || 0;

  const handleUpdateProfile = async () => {
    const profileToUpdate = {
      user_name: fullName,
      user_phOrEmail: email,
      user_password: newPassword,
      user_img: photo,
    };

    try {
      const update = await axios.put(
        `http://localhost:3000/api/BuyMeAll/users/${id}`,
        profileToUpdate
      );
      console.log("Profile updated successfully", update.data);
      alert("Profile updated successfully");
    } catch (error) {
      console.log("Error updating profile:", error);
      alert("Update operation failed");
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "patient");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dodim9flq/image/upload",
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const imageUrl = response.data.secure_url;
        console.log(imageUrl);
        setPhoto(imageUrl);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickCancel = () => {
    setFullName("");
    setEmail("");
    setPreviousPassword("");
    setNewPassword("");
    setPhoto(null);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 10,
    top: 10,
  });

  return (
    <div>
      <div className="side">
        <div className="manage-my-account">Manage My Account</div>
        <div className="my-orders">My Orders</div>
        <div className="my-wishlist"> My WishList </div>
        <div className="my-profile-parent">
          <div className="my-profile"> My Profile </div>
          <div className="address-book">Address Book</div>
          <div className="address-book">My Payment Options</div>
        </div>
        <div className="my-returns-parent">
          <div className="address-book"> My returns </div>
          <div className="address-book">My Cancellations</div>
        </div>
      </div>

      <div className="profileEdit">
        <div
          className="profileHeader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Typography
            variant="h4"
            fontSize="40px"
            color="error"
            gutterBottom
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Edit Profile
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "90px",
          }}
        >
          <div
            className="profilephotoEdit"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "250px",
            }}
          >
            <input accept="image/*" type="file" style={{ display: "none" }} />

            <img
              src={photo || "/"}
              alt="Profile Photo"
              className="mx-8 size-16 w-96"
            />

            <div className="input-div">
              <label className="file-label">
                <input
                  className="input"
                  name="picture"
                  type="file"
                  onChange={handleImageChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="icon"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line y2="21" x2="12" y1="12" x1="12"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
              </label>
            </div>
          </div>
          <div
            className="profileEditInfo"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "20px",
              width: "30%",
            }}
          >
            <Grid item xs={5} sm={5}>
              <form>
                <Grid container spacing={3} style={{ marginBottom: "16px" }}>
                  <Grid item xs={12}>
                    <TextField
                      label="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Previous Password"
                      type={showPassword ? "text" : "password"}
                      value={previousPassword}
                      onChange={(e) => setPreviousPassword(e.target.value)}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="New Password"
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "80px",
                    }}
                  >
                    <Button
                      className="w-full"
                      variant="contained"
                      color="error"
                      onClick={handleUpdateProfile}
                      style={{ marginBottom: "16px" }}
                    >
                      {" "}
                      Save Changes
                    </Button>
                    <Button
                      type="submit"
                      variant="outlined"
                      color="error"
                      onClick={() => void 0}
                      className="w-full md:w-1/2"
                      style={{ color: "black", marginBottom: "16px" }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Profile;

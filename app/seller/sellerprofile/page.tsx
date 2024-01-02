"use client";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NextPage } from "next";

interface SellerProfileProps {}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const SellerProfile: NextPage<SellerProfileProps> = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [previousPassword, setPreviousPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickCancel = () => {
    // Handle cancel logic here
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };

  return (
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
            marginBottom: "20px",
          }}
        >
          <input
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <img
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=2000"
            alt="Profile Photo"
            style={{ width: "250px", borderRadius: "50%", objectFit: "cover" }}
          />
          <Button
            component="label"
            sx={{
              bgcolor: "rgba(255, 0, 0, 0.8)",
              color: "white",
              "&:hover": { bgcolor: "white", color: "rgba(255, 0, 0, 0.9)" },
            }}
            startIcon={<PhotoCamera />}
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Photo
            <VisuallyHiddenInput type="file" />
          </Button>
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
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button type="submit" variant="contained" color="success">
                    Save
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    onClick={handleClickCancel}
                    variant="outlined"
                    color="error"
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
  );
};

export default SellerProfile;

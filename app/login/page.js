"use client";

import { useState } from "react";

const { Box, Typography, TextField, Button } = require("@mui/material");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailNotvalid, setEmailNotValid] = useState(false);
  const [passNotvalid, setPassNotValid] = useState(false);

  const handleLogin = () => {
    console.log("logginggg", email, password);
  };

  const handlePassword = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setPassNotValid(newPass.length !== 6);
  };

  const validateEmail = (email) => email.includes("@");

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailNotValid(!validateEmail(newEmail));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          color: "#fff",
        }}
      >
        <Typography variant="h5">Login</Typography>
        <TextField
          required
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmail}
          label="Email"
          error={emailNotvalid}
          helperText={emailNotvalid ? "Invalid email address" : ""}
          sx={{ mb: 2, backgroundColor: "#2c2c2c", borderRadius: 2 }}
          inputProps={{
            style: { color: "white", maxWidth: "100%", width: "400px" },
          }}
          InputLabelProps={{ style: { color: "grey" } }}
        />
        <TextField
          required
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePassword}
          label="password"
          error={passNotvalid}
          helperText={passNotvalid ? "password length minimum 6" : ""}
          sx={{ mb: 2, backgroundColor: "#2c2c2c", borderRadius: 2 }}
          inputProps={{
            style: { color: "white", maxWidth: "100%", width: "400px" },
          }}
          InputLabelProps={{ style: { color: "grey" } }}
        />
        <Button variant="contained" color="grey" onClick={handleLogin}>
          LOGIN
        </Button>
      </Box>
    </>
  );
}

export default Login;

"use client";

import { useState } from "react";

const { Box, Typography, TextField, Button } = require("@mui/material");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("logginggg", email, password);
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
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
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
          onChange={(e) => setPassword(e.target.value)}
          label="password"
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

"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import cartLogo from "../public/assets/Cart.png";

import zapLogo from "../public/assets/zapLogo.png";
import { Typography } from "@mui/material";

const MainHeader = styled(Box)({
  backgroundColor: "#000000",
  display: "flex",
  justifyContent: "space-around",
  padding: "30px",
});

const MainLogin = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  gap: "10px",
  cursor: "pointer",
});

function Header() {
  return (
    <>
      <MainHeader>
        <img src={zapLogo.src} />
        <TextField
          style={{
            backgroundColor: "#2c2c2c",
            border: "1px solid black",
            borderRadius: "10px",
            width: "700px",
            maxWidth: "100%",
          }}
          variant="outlined"
          label="Search in zapMart"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "grey", cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
          inputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "grey" },
          }}
        />
        <img style={{ width: "50px" }} src={cartLogo.src} />
        <MainLogin>
          <Typography>login</Typography>
          <Typography>SignUp</Typography>
          <Typography>Sell on Mart</Typography>
          <Typography>Help & Suppport</Typography>
        </MainLogin>
      </MainHeader>
    </>
  );
}
export default Header;

"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Container } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar style={{ backgroundColor: "darkslategray" }}>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "500",
              color: "whitesmoke",
              flexGrow: 1,
              display: { sm: "block" },
            }}
          >
            C F D
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {session ? (
            // If user is logged in, display profile picture
            <>
           
              <Avatar
                alt="User Avatar"
                src={session.user?.image || ""}
                sx={{ ml: 2, mr:2}}
              />
              {/* <div style={{backgroundColor: 'white', overflow: 'auto', display:'inline-block'}}> */}
              <Button
                onClick={() => signOut()}
                variant="text"
                
                sx={{ color: "white", paddingLeft: "10px",bgColor: "white", ':hover': {bgcolor: "peachpuff", color:'black'}}}
          
              >
                Sign Out
              </Button>
              {/* </div> */}
            </>
          ) : (
            // If user is not logged in, display login button
            <Button
                onClick={() => signIn()}
                variant="text"
                
                sx={{ color: "black", ml: "30px",bgColor: "white", ':hover': {bgcolor: "darkslategray", color:'white'}}}
          
              >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

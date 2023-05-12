/* eslint-disable no-undef */
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router";
import getDesignTokens from "./styles/MyTheme";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect } from "react";

import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
const Root = (props) => {
  const [user, setuser] = useState({});
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        // "646245005567-5lqp8psc62h89093k15ilee8lrvdqrft.apps.googleusercontent.com",
        "646245005567-1a33npebn0q9i0sbdnanqqotpr216gjc.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
  }, []);
  useEffect(() => {
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [user]);
  // useEffect(() => {
  //   google.accounts.id.prompt();
  //   console.log("prompt");
  // }, []);
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const handleCallbackResponse = async (response) => {
    const UserObject = jwtDecode(response.credential);
    localStorage.setItem("user", JSON.stringify(UserObject));
    localStorage.setItem("signedIn", true);
    setTimeout(
      (params) => {
        setuser(UserObject);
      },
      [1000]
    );
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // localStorage.setItem("user", JSON.stringify({}))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {Object.keys(JSON.parse(localStorage.getItem("user"))).length === 0 && (
        <VideoBackground>
          <div id="signInDiv">
            <h1>Sign in with Google</h1>
          </div>
        </VideoBackground>
      )}
      {Object.keys(JSON.parse(localStorage.getItem("user"))).length !== 0 && (
        <Box>
          {/* <Appbar
          showList={showList}
          setshowList={setshowList}
          handleDrawerToggle={handleDrawerToggle}
        /> */}
          <Outlet />
        </Box>
      )}
    </ThemeProvider>
  );
};

export default Root;

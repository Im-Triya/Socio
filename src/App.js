import React from 'react';
import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from "./scenes/homePage/index.jsx";
import LoginPage from "./scenes/loginPage/index";
import ProfilePage from "./scenes/profilePage/index";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";

function App() {
  const mode= useSelector( (state) => state.mode);
  const theme= useMemo( () => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Routes>
          <Route path="/" element={<LoginPage/>} />

          <Route path="/home" element={<HomePage/>} />

          <Route path="/profile/:userId" element={<ProfilePage/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <h1>hello world</h1>
    </div>
  );
}

export default App;

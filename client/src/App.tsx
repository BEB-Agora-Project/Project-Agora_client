import { Global } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mypage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import global from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Global styles={global} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
};

export default App;

import { Global } from "@emotion/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardList from "./pages/board/BoardList";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Mypage from "./pages/MyPage";
import global from "./styles/global";
import BoardPostList from "./pages/board/BoardPostList";
import BoardPostDetail from "./pages/board/BoardPostDetail";
import BoardPostEdit from "./pages/board/BoardPostEdit";
import BoardPostWrite from "./pages/board/BoardWrite";
import Test from "./pages/Test";
import Header from "./components/Header";
import { theme } from "./styles/theme";
import Account from "./pages/auth/Account";

const App: React.FC = () => {
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: theme.primary,
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Global styles={global} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardPostList />} />
        <Route path="/board/:id/write" element={<BoardPostWrite />} />
        <Route path="/board/post/:id" element={<BoardPostDetail />} />
        <Route path="/board/post/:id/edit" element={<BoardPostEdit />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

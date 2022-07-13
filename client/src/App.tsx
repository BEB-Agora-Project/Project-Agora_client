import { Global } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BoardList from "./pages/board/BoardList";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Mypage from "./pages/mypage/MyPage";
import global from "./styles/global";
import BoardPostList from "./pages/board/BoardPostList";
import BoardPostDetail from "./pages/board/BoardPostDetail";
import BoardPostEdit from "./pages/board/BoardPostEdit";
import BoardPostWrite from "./pages/board/BoardWrite";
import Test from "./pages/Test";
import Header from "./components/layout/Header";
import { theme } from "./styles/theme";
import Account from "./pages/auth/Account";
import ForgotPassword from "./pages/auth/ForgotPassword";
import EmailSent from "./pages/auth/EmailSent";
import Market from "./pages/market/Market";
import Discuss from "./pages/discuss/Discuss";
import SignUpEmailSent from "./pages/auth/SignUpEmailSent";
import DiscussPosts from "./pages/discuss/DiscussPosts";
import { parseCookie } from "./lib/utils";
import { useDispatch } from "./store";
import { userActions } from "./store/userSlice";

const App: React.FC = () => {
  const muiTheme = createTheme({
    palette: {
      primary: {
        main: theme.primary,
        dark: theme.primaryVariant,
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica Neue",
        "Apple SD Gothic Neo",
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  const dispatch = useDispatch();

  /*********************** API call **************************/
  useEffect(() => {
    const cookieObject = parseCookie(document.cookie);
    if (cookieObject.accessToken) {
      console.log("@@@ accessToken found @@@");
      console.log(cookieObject.accessToken);
      dispatch(userActions.setLoggedIn());
    }
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Global styles={global} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-email-sent" element={<SignUpEmailSent />} />
        <Route path="/market" element={<Market />} />
        <Route path="/find" element={<ForgotPassword />} />
        <Route path="/find/email-sent" element={<EmailSent />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/board" element={<BoardList />} />
        <Route path="/board/:id" element={<BoardPostList />} />
        <Route path="/board/:id/write" element={<BoardPostWrite />} />
        <Route path="/board/post/:id" element={<BoardPostDetail />} />
        <Route path="/board/post/:id/edit" element={<BoardPostEdit />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/discuss/posts" element={<DiscussPosts />} />
      </Routes>
    </MuiThemeProvider>
  );
};

export default App;

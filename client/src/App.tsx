import { Global } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import global from "./styles/global";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import MyPage from "./pages/mypage/MyPage";
import BoardListPage from "./pages/board/BoardListPage";
import BoardPostListPage from "./pages/board/BoardPostListPage";
import BoardPostDetailPage from "./pages/board/BoardPostDetailPage";
import BoardPostEditPage from "./pages/board/BoardPostEditPage";
import BoardPostWritePage from "./pages/board/BoardWritePage";
import TestPage from "./pages/TestPage";
import { theme } from "./styles/theme";
import AccountPage from "./pages/auth/AccountPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import EmailSentPage from "./pages/auth/EmailSentPage";
import MarketPage from "./pages/market/MarketPage";
import DiscussPage from "./pages/discuss/DiscussPage";
import SignUpEmailSentPage from "./pages/auth/SignUpEmailSentPage";
import DiscussPostsPage from "./pages/discuss/DiscussPostsPage";
import { parseCookie } from "./lib/utils";
import LoginPromptModal from "./components/modals/LoginPromptModal";
import Header from "./components/layout/Header";
import ArchivePage from "./pages/archive/ArchivePage";
import DiscussPostDetailPage from "./pages/discuss/DiscussPostDetailPage";
import BoardCreateModal from "./components/modals/BoardCreateModal";
import DiscussPostEditPage from "./pages/discuss/DiscussPostEditPage";
import Footer from "./components/layout/Footer";
import axios from "./lib/api";
import useAuth from "./hooks/useAuth";
import { useSelector } from "./store";
import EmojiCommentModal from "./components/modals/EmojiCommentModal";

const App: React.FC = () => {
  console.log(process.env.REACT_APP_SERVER_URL);

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

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  console.log("@@@ test @@@");

  const authenticate = useAuth();

  useEffect(() => {
    const accessToken = parseCookie(document.cookie).accessToken;
    console.log("@@@ current access token header @@@");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(process.env.REACT_APP_HOST);
    const cookieObject = parseCookie(document.cookie);
    if (cookieObject.accessToken) {
      console.log("@@@ access token found @@@");

      authenticate();
    }
  }, [authenticate]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Global styles={global} />
      <Header />
      <LoginPromptModal />
      <BoardCreateModal />
      <EmojiCommentModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup-email-sent" element={<SignUpEmailSentPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/find" element={<ForgotPasswordPage />} />
        <Route path="/find/email-sent" element={<EmailSentPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/board" element={<BoardListPage />} />
        <Route path="/board/:id" element={<BoardPostListPage />} />
        <Route path="/board/:id/write" element={<BoardPostWritePage />} />
        <Route path="/board/post/:id" element={<BoardPostDetailPage />} />
        <Route path="/board/post/:id/edit" element={<BoardPostEditPage />} />
        <Route path="/discuss" element={<DiscussPage />} />
        <Route path="/discuss/posts" element={<DiscussPostsPage />} />
        <Route path="/discuss/post/:id" element={<DiscussPostDetailPage />} />
        <Route
          path="/discuss/post/:id/edit"
          element={<DiscussPostEditPage />}
        />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;

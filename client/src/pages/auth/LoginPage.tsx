import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaperLayout from "../../components/layout/PaperLayout";
import { loginAPI } from "../../lib/api/user";
import { setCookie } from "../../lib/utils";
import { useDispatch } from "../../store";
import { userActions } from "../../store/userSlice";
import useAuth from "../../hooks/useAuth";
import axios from "../../lib/api";
import LoginForm from "../../components/auth/LoginForm";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [persistLogin, setPersistLogin] = useState(false);

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangePersistLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersistLogin(event.target.checked);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticate = useAuth();

  const onClickForgotPassword = () => {
    navigate("/find");
  };

  const onClickSubmitButton = async () => {
    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 확인해주세요.");
      return;
    }

    setIsLoading(true);
    /*********************** API call **************************/
    try {
      const body = {
        email: email,
        password: password,
      };
      const response = await loginAPI(body);
      console.log("LoginPage.tsx | loginAPI response");
      console.log(response.data);
      const accessToken = response.data.data.accessToken;
      dispatch(userActions.setUserLoggedIn());

      if (persistLogin) setCookie("accessToken", accessToken);
      if (!persistLogin) setCookie("accessToken", accessToken, "7200");

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      await authenticate();

      navigate("/", { replace: true });
    } catch (error) {
      console.log("LoginPage.tsx | loginAPI error");
      console.log(error);
      setErrorMessage("이메일 혹은 비밀번호가 다릅니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const onClickSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <PaperLayout width="32rem">
      <LoginForm
        email={email}
        password={password}
        errorMessage={errorMessage}
        isLoading={isLoading}
        onChangePersistLogin={onChangePersistLogin}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickSignUpButton={onClickSignUpButton}
        onClickSubmitButton={onClickSubmitButton}
        onClickForgotPassword={onClickForgotPassword}
      />
    </PaperLayout>
  );
};

export default Login;

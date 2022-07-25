import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/auth/SignUpForm";
import PaperLayout from "../../components/layout/PaperLayout";
import { signUpAPI } from "../../lib/api/user";
import {
  EMAIL_REG_EXP,
  PASSWORD_REG_EXP,
  USERNAME_REG_EXP,
} from "../../lib/staticData";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [emailConflict, setEmailConflict] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    setEmailValid(EMAIL_REG_EXP.test(email) || email === "");
  };

  const validateUsername = (username: string) => {
    setUsernameValid(USERNAME_REG_EXP.test(username) || username === "");
  };

  const validatePassword = (password: string) => {
    setPasswordValid(PASSWORD_REG_EXP.test(password) || password === "");
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
    setEmailConflict(false);
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    validateUsername(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const onClickLoginButton = () => {
    navigate("/login");
  };

  const onClickSubmitButton = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    setIsLoading(true);
    const body = {
      email: email,
      password: password,
      username: username,
    };

    /*********************** API call **************************/
    try {
      const response = await signUpAPI(body);
      console.log("SignUpPage.tsx | signUpAPI response");
      console.log(response);
      navigate("/signup-email-sent");
    } catch (error: any) {
      console.log("SignUpPage.tsx | signUpAPI error");
      console.log(error);

      if (error.response.status === 409) {
        setEmailConflict(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PaperLayout width="32rem">
      <SignUpForm
        email={email}
        emailValid={emailValid}
        username={username}
        usernameValid={usernameValid}
        password={password}
        passwordValid={passwordValid}
        isLoading={isLoading}
        onChangeEmail={onChangeEmail}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
        onClickLoginButton={onClickLoginButton}
        onClickSubmitButton={onClickSubmitButton}
        emailConflict={emailConflict}
      />
    </PaperLayout>
  );
};

export default Login;

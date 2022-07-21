import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaperLayout from "../../components/layout/PaperLayout";
import { EMAIL_REG_EXP } from "../../lib/staticData";
import ForgotPassword from "../../components/auth/ForgotPassword";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    setEmailValid(EMAIL_REG_EXP.test(email) || email === "");
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const onClickSubmitButton = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/find/email-sent");
    }, 2000);
  };

  const onClickReturnButton = () => {
    navigate("/login");
  };

  return (
    <PaperLayout width="40rem">
      <ForgotPassword
        email={email}
        emailValid={emailValid}
        isLoading={isLoading}
        onChangeEmail={onChangeEmail}
        onClickReturnButton={onClickReturnButton}
        onClickSubmitButton={onClickSubmitButton}
      />
    </PaperLayout>
  );
};

export default ForgotPasswordPage;

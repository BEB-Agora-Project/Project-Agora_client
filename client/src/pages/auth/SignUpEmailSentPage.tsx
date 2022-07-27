import React from "react";
import PaperLayout from "../../components/layout/PaperLayout";
import SignUpEmailSent from "../../components/auth/SignUpEmailSent";

const SignUpEmailSentPage: React.FC = () => {
  return (
    <PaperLayout width="40rem">
      <SignUpEmailSent />
    </PaperLayout>
  );
};

export default SignUpEmailSentPage;

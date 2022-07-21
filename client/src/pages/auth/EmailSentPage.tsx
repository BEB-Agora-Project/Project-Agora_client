import React from "react";
import EmailSent from "../../components/auth/EmailSent";
import PaperLayout from "../../components/layout/PaperLayout";

const EmailSentPage: React.FC = () => {
  return (
    <PaperLayout width="40rem">
      <EmailSent />
    </PaperLayout>
  );
};

export default EmailSentPage;

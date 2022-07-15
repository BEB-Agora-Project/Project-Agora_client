import React, { useEffect, useState } from "react";
import { getArchivedDiscussAPI } from "../../lib/api/discuss";

const ArchivePage: React.FC = () => {
  const [archivedDiscuss, setArchivedDiscuss] =
    useState<GetArchivedDiscussAPIResponseType>([]);

  const fetchArchivedDiscuss = async () => {
    try {
      const response = await getArchivedDiscussAPI();
      console.log(response);
      setArchivedDiscuss(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArchivedDiscuss();
  }, []);

  return (
    <div>
      {archivedDiscuss.map((discuss, index) => (
        <p key={index}>
          {discuss.id} {discuss.title}
        </p>
      ))}
    </div>
  );
};

export default ArchivePage;

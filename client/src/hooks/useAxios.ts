import { useState } from "react";

const useAxios = (axiosCallback: any) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    setIsLoading(true);
    try {
      const response = await axiosCallback;
      setData(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, execute };
};

export default useAxios;

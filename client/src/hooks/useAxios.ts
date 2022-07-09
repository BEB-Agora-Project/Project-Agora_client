import { AxiosError, AxiosRequestConfig } from "axios";
import { useState } from "react";
import axios from "../lib/api";

interface AxiosProps {
  method: string;
  url: string;
  body?: object;
  config?: AxiosRequestConfig;
}

const useAxios = <BodyType, ResponseType = void>({
  method,
  url,
  config,
}: AxiosProps) => {
  const [data, setData] = useState<ResponseType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  const execute = async (body: BodyType) => {
    setLoading(true);
    try {
      if (method === "get" || method === "delete") {
        const response = await axios[method](url, config);
        setData(response.data);
      }

      if (method === "post" || method === "put") {
        const response = await axios[method](url, body, config);
        setData(response.data);
      }
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
};

export default useAxios;

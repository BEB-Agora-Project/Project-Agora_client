import { useNavigate } from "react-router-dom";
import axios from "../lib/api";
import { parseCookie } from "../lib/utils";
import useAuth from "./useAuth";

const useProtectPage = () => {
  const navigate = useNavigate();
  const authenticate = useAuth();

  const protectPage = async () => {
    const accessToken = parseCookie(document.cookie).accessToken;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    const authenticated = await authenticate();
    if (!authenticated) navigate("/login");
  };

  return protectPage;
};

export default useProtectPage;

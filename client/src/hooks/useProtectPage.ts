import { useNavigate } from "react-router-dom";
import axios from "../lib/api";
import { authenticateAPI } from "../lib/api/user";
import { parseCookie } from "../lib/utils";

const useProtectPage = () => {
  const navigate = useNavigate();

  const protectPage = async () => {
    const accessToken = parseCookie(document.cookie).accessToken;
    console.log("@@@ current access token header @@@");
    console.log(accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // API call
    try {
      const response = await authenticateAPI();
      console.log(response);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  return protectPage;
};

export default useProtectPage;

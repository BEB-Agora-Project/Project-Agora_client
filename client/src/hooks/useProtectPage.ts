import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "../store";

const useProtectPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const location = useLocation();

  const protectPage = () => {
    // API call
  };

  return protectPage;
};

export default useProtectPage;

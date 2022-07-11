import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "../store";

const useProtectPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const location = useLocation();

  const protectPage = () => {
    if (isLoggedIn === false) {
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  return protectPage;
};

export default useProtectPage;

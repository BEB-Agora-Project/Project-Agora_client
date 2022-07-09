import { useNavigate } from "react-router-dom";
import { useSelector } from "../store";

const useProtectPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const protectPage = () => {
    if (isLoggedIn === false) {
      navigate("/login", { replace: true });
    }
  };

  return protectPage;
};

export default useProtectPage;

import { useCallback } from "react";
import { authenticateAPI } from "../lib/api/user";
import { useDispatch } from "../store";
import { userActions } from "../store/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const authenticate = useCallback(async () => {
    /*********************** API call **************************/
    try {
      const response = await authenticateAPI();
      console.log(response.data);

      const { username, email, token, nft } = response.data;
      dispatch(userActions.setUserLoggedIn());
      dispatch(
        userActions.setUserInfo({
          username: username,
          email: email,
          token: token,
          nft: nft,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return authenticate;
};

export default useAuth;

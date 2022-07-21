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
      console.log("useAuth.ts | authenticateAPI response");
      console.log(response.data);

      const { username, email, token, nft, item } = response.data;
      dispatch(userActions.setUserLoggedIn());
      dispatch(
        userActions.setUserInfo({
          username: username,
          email: email,
          token: token,
          nft: nft,
          item: item,
        })
      );
    } catch (error) {
      console.log("useAuth.ts | authenticateAPI error");
      console.log(error);
    }
  }, [dispatch]);

  return authenticate;
};

export default useAuth;

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

      const {
        username,
        email,
        token,
        nft,
        item,
        profile_image,
        current_badge,
      } = response.data;
      dispatch(userActions.setUserLoggedIn());
      dispatch(
        userActions.setUserInfo({
          username: username,
          email: email,
          token: token,
          nft: nft,
          item: item,
          profile_image: profile_image,
          current_badge: current_badge,
        })
      );

      return true;
    } catch (error) {
      console.log("useAuth.ts | authenticateAPI error");
      console.log(error);
      dispatch(userActions.setUserLoggedOut());
      dispatch(
        userActions.setUserInfo({
          username: "",
          email: "",
          token: 0,
          nft: [],
          item: [],
          profile_image: "",
          current_badge: "",
        })
      );
    }

    return false;
  }, [dispatch]);

  return authenticate;
};

export default useAuth;

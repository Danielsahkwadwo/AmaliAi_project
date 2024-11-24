import { useContext, useEffect } from "react";
import { AuthContext } from "./../Context/AuthContext";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function useRedirect(path) {
  const navigate = useNavigate();
  const GLOBAL_CONTEXT = useContext(AuthContext);
  const { getLoginStatus, isLoggedIn } = GLOBAL_CONTEXT;

  useEffect(() => {
    const redirectUsers = async () => {
      let responseStatus;
      try {
        const response = await getLoginStatus();
        responseStatus = response.data;
      } catch (error) {
        console.log(error);
        navigate(path, { replace: true });
        return;
      }
      if (responseStatus.status !== true) {
        toast.info("Unauthorized. Login to continue");
        navigate(path, { replace: true });
      }
      return;
    };
    redirectUsers();
  }, [navigate, path, isLoggedIn]);
}

export default useRedirect;
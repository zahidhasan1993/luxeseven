import { useContext } from "react";
import { AuthDataProvider } from "../auth/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthDataProvider);
    return auth
};

export default useAuth;
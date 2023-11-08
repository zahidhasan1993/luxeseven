import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import useAuth from "../customhooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth();
    const location = useLocation();

    if (loader) {
        return <Spinner></Spinner>        
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivateRoute;
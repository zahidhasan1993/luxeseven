import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../customhooks/useAdmin";
import useAuth from "../customhooks/useAuth";
import Spinner from "../components/shared/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loader } = useAuth();

  const { isAdmin,isAdminLoading } = useAdmin();
  const location = useLocation();
  if (loader || isAdminLoading) {
    return <Spinner></Spinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;

import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
  const { user } = useAuth();
  const {data : isAdmin = null, isLoading: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/users/${user?.email}`);

        return res.data.role;
    }
  })
  return {isAdmin,isAdminLoading}
};

export default useAdmin;

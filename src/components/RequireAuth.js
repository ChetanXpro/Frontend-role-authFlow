import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    // console.log(auth?.user)

    const decode = auth?.accessToken ? jwtDecode(auth?.accessToken ) : undefined
    // console.log(decode)
    // const roles = decode.roles || []
       
    return (
        decode?.UserInfo?.username ? <Outlet/>  : <Navigate to="/login" state={{ from: location }} replace />
        // roles?.find(role => allowedRoles?.includes(role))
        //     ? <Outlet />
        //     : auth?.accessToken
        //         ? <Navigate to="" state={{ from: location }} replace />
        //         : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
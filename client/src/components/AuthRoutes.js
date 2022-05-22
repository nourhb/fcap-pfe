
import {
    Navigate, Outlet,
} from "react-router-dom";
//hoc component hign order component 
const AuthRoutes = ({
    user,


}) => {
    if (user) {
        return <Navigate to={'/home'} replace />;
    }
    
    return <Outlet />;;  // children
};


export default AuthRoutes

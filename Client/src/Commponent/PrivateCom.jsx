import { Navigate,Outlet } from "react-router-dom";

const PrivateCom =()=>{
    const auth = localStorage.getItem("user");
    return auth ? <Outlet/> : <Navigate to="/Login" />;
}

export default PrivateCom;
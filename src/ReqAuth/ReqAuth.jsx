import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
const ReqAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
const data=useSelector(state=>state.AuthReducer)
console.log(data);
  const navigate = useNavigate();
  if (isAuth === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export default ReqAuth;

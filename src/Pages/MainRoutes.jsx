import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { HomePage } from "./HomePage";
import ReqAuth from "./../ReqAuth/ReqAuth";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ReqAuth><HomePage/></ReqAuth>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
export default MainRoutes;

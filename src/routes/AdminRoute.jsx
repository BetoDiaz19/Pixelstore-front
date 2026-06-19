import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AdminRoute({ children }) {

  const { user } = useAuth();

  console.log("USUARIO:", user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.rol !== "admin") {

    console.log(
      "ROL DETECTADO:",
      user.rol
    );

    return <Navigate to="/" />;
  }

  return children;

}

export default AdminRoute;
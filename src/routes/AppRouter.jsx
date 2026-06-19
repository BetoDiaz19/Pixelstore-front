import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {
  lazy,
  Suspense,
  useEffect,
  useState
} from "react";

import Navbar from "../components/Navbar/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import Loader from "../components/Loader/Loader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() =>
  import("../pages/Home/Home")
);

const Login = lazy(() =>
  import("../pages/Login/Login")
);

const Register = lazy(() =>
  import("../pages/Register/Register")
);

const Games = lazy(() =>
  import("../pages/Games/Games")
);

const Profile = lazy(() =>
  import("../pages/Profile/Profile")
);

const GameDetail = lazy(() =>
  import("../pages/GameDetail/GameDetail")
);

const Cart = lazy(() =>
  import("../pages/Cart/Cart")
);

const History = lazy(() =>
  import("../pages/History/History")
);
const Favorites = lazy(() =>
  import("../pages/Favorites/Favorites")
);

const About = lazy(() =>
  import("../pages/About/About")
);

const Offers = lazy(() =>
  import("../pages/Offers/Offers")
);

const Admin = lazy(() =>
  import("../pages/Admin/Admin")
);

const NotFound = lazy(() =>
  import("../pages/NotFound/NotFound")
);

function AppRouter() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (

    <BrowserRouter>

      <Navbar />

      <Suspense fallback={<Loader />}>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/games"
            element={<Games />}
          />

          <Route
            path="/games/:id"
            element={<GameDetail />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/offers"
            element={<Offers />}
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        newestOnTop
      />

    </BrowserRouter>

  );

}

export default AppRouter;
import { useState } from "react";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "El correo es obligatorio";
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "Debe tener mínimo 6 caracteres";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      try {

        const response = await axios.post(
          "https://pixelstore-back.onrender.com/api/auth/login",
          {
            email,
            password
          }
        );

        // Guardar token
        localStorage.setItem(
          "token",
          response.data.token
        );

        // Guardar usuario en Context
        login(response.data.user);

        toast.success(
          `Bienvenido ${response.data.user.nombre}`
        );

        navigate("/");

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Credenciales incorrectas"
        );

      }

    }

  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>PixelStore</h1>

        <h2>Iniciar Sesión</h2>

        <p className="login-subtitle">
          Accede a tu biblioteca gamer
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {errors.email && (
            <p className="error">
              {errors.email}
            </p>
          )}

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {errors.password && (
            <p className="error">
              {errors.password}
            </p>
          )}

          <button type="submit">
            Ingresar
          </button>

          <p className="login-footer">
            ¿No tienes cuenta?
            <Link to="/register">
              Crear cuenta
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;
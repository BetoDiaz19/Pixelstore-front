import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Nombre obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Correo obligatorio";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Mínimo 6 caracteres";
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Las contraseñas no coinciden";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      try {

        await axios.post(
          "https://pixelstore-back.onrender.com/api/auth/register",
          {
            nombre: formData.nombre,
            email: formData.email,
            password: formData.password
          }
        );

        toast.success(
          "Usuario registrado correctamente"
        );

        navigate("/login");

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Error al registrar usuario"
        );

      }

    }

  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>PixelStore</h1>

        <h2>Crear Cuenta</h2>

        <p className="register-subtitle">
          Únete a la comunidad gamer de PixelStore
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          {errors.nombre &&
            <p className="error">
              {errors.nombre}
            </p>
          }

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email &&
            <p className="error">
              {errors.email}
            </p>
          }

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password &&
            <p className="error">
              {errors.password}
            </p>
          }

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {errors.confirmPassword &&
            <p className="error">
              {errors.confirmPassword}
            </p>
          }

          <button type="submit">
            Registrarme
          </button>

          <p className="register-footer">
            ¿Ya tienes cuenta?
            <Link to="/login">
              Iniciar sesión
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;
import { useTheme } from "../../context/ThemeContext";

import {
  FaGamepad,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import { toast } from "react-toastify";

function Navbar() {

  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const { darkMode, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">

      <div className="logo">
        <FaGamepad className="logo-icon" />
        <span>PixelStore</span>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {
          menuOpen
            ? <FaTimes />
            : <FaBars />
        }
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <NavLink to="/">
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/games">
            Catálogo
          </NavLink>
        </li>

        <li>
          <NavLink to="/offers">
            Ofertas
          </NavLink>
        </li>

        {
          user?.rol === "admin" && (
            <li>
              <NavLink to="/admin">
                Admin
              </NavLink>
            </li>
          )
        }

        {
          !user ? (
            <>
              <li>
                <NavLink to="/login">
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink to="/register">
                  Registro
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/profile">
                  Perfil
                </NavLink>
              </li>
              <li>
                <NavLink to="/history">
                  Historial
                </NavLink>
              </li>
              <li>
              <NavLink to="/favorites">
                Favoritos
              </NavLink>
            </li>
              <li>
                <button
                  className="logout-btn"
                  onClick={() => {
                    logout();
                    toast.info(
                      "Sesión cerrada correctamente"
                    );
                  }}
                >
                  Cerrar Sesión
                </button>
              </li>
            </>
          )
        }

        <li>
          <NavLink to="/about">
            Nosotros
          </NavLink>
        </li>

      </ul>

      <div className="nav-icons">

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="cart-icon">

          
          <Link
            to="/cart"
            className="cart-link"
          >
            <FaShoppingCart />
          </Link>

          <span className="cart-count">
            {cartItems.length}
          </span>

        </div>

        <FaUser />

      </div>

      {
        user && (
          <span
            className="user-greeting"
            style={{
              color: "#8b5cf6",
              marginLeft: "20px"
            }}
          >
            Hola {user.nombre}
          </span>
        )
      }

    </nav>
  );
}

export default Navbar;
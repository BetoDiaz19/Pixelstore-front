import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import FavoritesProvider from "./context/FavoritesContext";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
           <FavoritesProvider>

            <App />

            <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="dark"
            />

          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
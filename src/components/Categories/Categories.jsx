import { useNavigate } from "react-router-dom";

import {
  FaCrosshairs,
  FaCar,
  FaFutbol,
  FaHatWizard,
  FaGhost,
  FaRocket
} from "react-icons/fa";

import "./Categories.css";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Acción",
      icon: <FaCrosshairs />
    },
    {
      name: "Carreras",
      icon: <FaCar />
    },
    {
      name: "Deportes",
      icon: <FaFutbol />
    },
    {
      name: "RPG",
      icon: <FaHatWizard />
    },
    {
      name: "Terror",
      icon: <FaGhost />
    },
    {
      name: "Ciencia ficcion",
      icon: <FaRocket />
    }
  ];

  return (
    <section className="categories">
      
      <div className="section-title">
      <h2>Categorías</h2>
      </div>

      <div className="categories-grid">

        {categories.map((category, index) => (
            <div
              className="category-card"
              key={index}
              onClick={() =>
                navigate(
                  `/games?category=${encodeURIComponent(
                    category.name
                  )}`
                )
              }
            >
            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Admin() {
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/games"
      );

      setGames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const handleDelete = async (id, title) => {
    const result = await Swal.fire({
      title: "¿Eliminar juego?",
      text: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    });

    if (!result.isConfirmed) return;

    try {
      const token =
        localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/games/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      Swal.fire({
        icon: "success",
        title: "Juego eliminado"
      });

      fetchGames();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error al eliminar"
      });
    }
  };

  const handleAddGame = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Agregar Juego",

     html: `
      <div style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:12px;
        margin-top:15px;
      ">

        <input
          id="titulo"
          class="swal2-input"
          placeholder="🎮 Título"
          style="margin:0;width:100%;"
        >

        <select
          id="categoria"
          class="swal2-input"
          style="margin:0;width:100%;"
        >
          <option value="RPG">🧙 RPG</option>
          <option value="Acción">⚔️ Acción</option>
          <option value="Deportes">⚽ Deportes</option>
          <option value="Ciencia Ficción">🚀 Ciencia Ficción</option>
          <option value="Carreras">🏎️ Carreras</option>
          <option value="Terror">👻 Terror</option>
        </select>

        <input
          id="precio"
          type="number"
          class="swal2-input"
          placeholder="💲 Precio"
          style="margin:0;width:100%;"
        >

        <input
          id="stock"
          type="number"
          class="swal2-input"
          placeholder="📦 Stock"
          style="margin:0;width:100%;"
        >

      </div>

      <input
        id="imagen"
        class="swal2-input"
        placeholder="🖼️ URL de Imagen"
      >

      <textarea
        id="descripcion"
        class="swal2-textarea"
        placeholder="📝 Descripción del videojuego"
      ></textarea>

      <div style="
        margin-top:15px;
        padding:10px;
        border-radius:12px;
        background:#111827;
      ">
        <img
          id="preview"
          src=""
          style="
            width:100%;
            max-height:250px;
            object-fit:contain;
            border-radius:10px;
            display:none;
          "
        >
      </div>
      `,
      didOpen: () => {

      const imagen =
        document.getElementById("imagen");

      const preview =
        document.getElementById("preview");

      imagen.addEventListener(
        "input",
        () => {

          preview.src = imagen.value;

          preview.style.display =
            imagen.value
              ? "block"
              : "none";

        }
      );

    },

      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",

      preConfirm: () => ({
        titulo:
          document.getElementById("titulo")
            .value,

        categoria:
          document.getElementById(
            "categoria"
          ).value,

        precio: Number(
          document.getElementById(
            "precio"
          ).value
        ),

        stock: Number(
          document.getElementById(
            "stock"
          ).value
        ),

        imagen:
          document.getElementById("imagen")
            .value,

        descripcion:
          document.getElementById(
            "descripcion"
          ).value
      })
    });

    if (!formValues) return;

    try {
      const token =
        localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/games",
        formValues,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      Swal.fire({
        icon: "success",
        title: "Juego agregado"
      });

      fetchGames();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error al guardar"
      });
    }
  };

  const handleEditGame = async (game) => {
    const { value: formValues } =
      await Swal.fire({
        title: "Editar Juego",

        html: `
        <div style="
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:12px;
          margin-top:15px;
        ">

          <input
            id="titulo"
            class="swal2-input"
            value="${game.title}"
            placeholder="🎮 Título"
            style="margin:0;width:100%;"
          >

          <select
            id="categoria"
            class="swal2-input"
            style="margin:0;width:100%;"
          >
            <option value="RPG"
              ${game.category === "RPG" ? "selected" : ""}>
              🧙 RPG
            </option>

            <option value="Acción"
              ${game.category === "Acción" ? "selected" : ""}>
              ⚔️ Acción
            </option>

            <option value="Deportes"
              ${game.category === "Deportes" ? "selected" : ""}>
              ⚽ Deportes
            </option>

            <option value="Ciencia Ficción"
              ${game.category === "Ciencia Ficción" ? "selected" : ""}>
              🚀 Ciencia Ficción
            </option>

            <option value="Carreras"
              ${game.category === "Carreras" ? "selected" : ""}>
              🏎️ Carreras
            </option>

            <option value="Terror"
              ${game.category === "Terror" ? "selected" : ""}>
              👻 Terror
            </option>
          </select>

          <input
            id="precio"
            type="number"
            class="swal2-input"
            value="${game.price}"
            placeholder="💲 Precio"
            style="margin:0;width:100%;"
          >

          <input
            id="stock"
            type="number"
            class="swal2-input"
            value="${game.stock}"
            placeholder="📦 Stock"
            style="margin:0;width:100%;"
          >

        </div>

        <input
          id="imagen"
          class="swal2-input"
          value="${game.image}"
          placeholder="🖼️ URL Imagen"
        >

        <div style="
          margin-top:15px;
          padding:10px;
          border-radius:12px;
          background:#111827;
        ">
          <img
            id="preview"
            src="${game.image}"
            style="
              width:100%;
              max-height:250px;
              object-fit:contain;
              border-radius:10px;
            "
          >
        </div>

        <textarea
          id="descripcion"
          class="swal2-textarea"
          placeholder="📝 Descripción"
        >${game.description}</textarea>
        `,
        didOpen: () => {

        const imagen =
          document.getElementById("imagen");

        const preview =
          document.getElementById("preview");

        imagen.addEventListener(
          "input",
          () => {

            preview.src = imagen.value;

          }
        );

      },
        showCancelButton: true,

        confirmButtonText: "Guardar",

        cancelButtonText: "Cancelar",

        preConfirm: () => ({
          titulo:
            document.getElementById(
              "titulo"
            ).value,

          categoria:
            document.getElementById(
              "categoria"
            ).value,

          precio: Number(
            document.getElementById(
              "precio"
            ).value
          ),

          stock: Number(
            document.getElementById(
              "stock"
            ).value
          ),

          imagen:
            document.getElementById(
              "imagen"
            ).value,

          descripcion:
            document.getElementById(
              "descripcion"
            ).value
        })
      });

    if (!formValues) return;

    try {
      const token =
        localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/games/${game.id}`,
        formValues,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      Swal.fire({
        icon: "success",
        title: "Juego actualizado"
      });

      fetchGames();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error al actualizar"
      });
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <h1
          style={{
            color: "#8b5cf6",
            fontSize: "3rem"
          }}
        >
          🎮 Panel de Administración
        </h1>

        <p
          style={{
            color: "#94a3b8"
          }}
        >
          Gestiona los videojuegos de PixelStore
        </p>

        <button
          onClick={handleAddGame}
          style={{
            marginTop: "20px",
            background:
              "linear-gradient(135deg,#7c3aed,#6366f1)",
            border: "none",
            color: "white",
            padding: "14px 28px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem"
          }}
        >
          ➕ Agregar Juego
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "16px",
              padding: "15px",
              gap: "20px"
            }}
          >
            <img
              src={game.image}
              alt={game.title}
              style={{
                width: "120px",
                height: "160px",
                objectFit: "contain",
                borderRadius: "10px",
                background: "#0f172a"
              }}
            />

            <div style={{ flex: 1 }}>
              <h3 style={{ color: "white" }}>
                {game.title}
              </h3>

              <p
                style={{
                  color: "#a78bfa"
                }}
              >
                {game.category}
              </p>

              <p
                style={{
                  color: "#22c55e",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
                }}
              >
                ${game.price}
              </p>

              <div
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  background:
                    game.stock > 10
                      ? "#14532d"
                      : game.stock > 0
                      ? "#78350f"
                      : "#7f1d1d",
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                📦 Stock: {game.stock}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <button
                onClick={() =>
                  handleEditGame(game)
                }
                style={{
                  background:
                    "linear-gradient(135deg,#7c3aed,#6366f1)",
                  color: "white",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                ✏️ Editar
              </button>

              <button
                onClick={() =>
                  handleDelete(
                    game.id,
                    game.title
                  )
                }
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
              >
                🗑️ Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
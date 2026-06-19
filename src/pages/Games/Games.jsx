import {
  useState,
  useEffect,
  useRef
} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import GameCard from "../../components/GameCard/GameCard";
import "./Games.css";

function Games() {

  const [searchParams] = useSearchParams();

  const searchInputRef = useRef(null);

  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "Todos"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const selectedCategory =
      searchParams.get("category") || "Todos";

    setCategory(selectedCategory);

  }, [searchParams]);

  useEffect(() => {

    const fetchGames = async () => {

      try {

        const response = await axios.get(
          "https://pixelstore-back.onrender.com/api/games"
        );

        setGames(response.data);

      } catch (error) {

        console.error(
          "Error al obtener juegos:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchGames();

  }, []);

  const filteredGames = games.filter((game) => {

    const matchSearch =
      game.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "Todos"
        ? true
        : game.category === category;

    return matchSearch && matchCategory;

  });

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >
        Cargando juegos...
      </h2>
    );
  }

  return (
    <div className="page-animation">

      <div style={{ padding: "50px" }}>

        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Catálogo de Juegos
        </h1>

        {category !== "Todos" && (
          <h3
            style={{
              textAlign: "center",
              color: "#8b5cf6",
              marginBottom: "30px"
            }}
          >
            Categoría seleccionada: {category}
          </h3>
        )}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px"
          }}
        >

          <input
            ref={searchInputRef}
            className="games-search"
            type="text"
            placeholder="Buscar videojuego..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            style={{
              flex: 1,
              padding: "15px",
              borderRadius: "10px"
            }}
          />

          <button
            onClick={() =>
              searchInputRef.current.focus()
            }
            style={{
              background: "#8b5cf6",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "0 20px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            🔍 Buscar
          </button>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(280px,320px))",
            justifyContent: "center",
            gap: "30px"
          }}
        >
          {filteredGames.length > 0 ? (

            filteredGames.map((game) => (

              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                price={game.price}
                category={game.category}
              />

            ))

          ) : (

            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "50px"
              }}
            >
              <h2>
                😢 No se encontraron videojuegos
              </h2>
            </div>

          )}
        </div>

      </div>

    </div>
  );

}

export default Games;
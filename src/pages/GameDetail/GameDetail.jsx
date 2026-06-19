import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useCart from "../../hooks/useCart";
import "./GameDetail.css";
import { toast } from "react-toastify";


function GameDetail() {


  const { id } = useParams();

  const { addToCart } = useCart();

  const [game, setGame] = useState(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const fetchGame = async () => {


      try {


        const response = await axios.get(
          `https://pixelstore-back.onrender.com/api/games/${id}`
        );


        setGame(response.data);



      } catch (error) {


        console.error(
          "Error al obtener juego:",
          error
        );


      } finally {


        setLoading(false);


      }


    };


    fetchGame();


  }, [id]);




  if (loading) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "100px"
        }}
      >
        Cargando juego...
      </h1>

    );

  }




  if (!game) {

    return <h1>Juego no encontrado</h1>;

  }





    const handleAddCart = () => {


      if(game.stock <= 0){

        toast.error(
          "Producto agotado"
        );

        return;

      }


      addToCart(game);


      toast.success(
        `${game.title} agregado al carrito`
      );


    };





  return (


    <div className="game-detail">


      <div className="game-detail-card">



        <img
          src={game.image}
          alt={game.title}
          className="detail-image"
        />




        <div className="detail-content">



          <span className="detail-category">

            {game.category}

          </span>





          <h1>

            {game.title}

          </h1>





          <div className="detail-rating">

            ⭐⭐⭐⭐⭐ 4.9

          </div>





          <p className="detail-description">

            {game.description}

          </p>





          <h2 className="detail-price">

            ${game.price}

          </h2>





          {
            game.stock > 10 ?


            <p className="available">

              Disponible

            </p>



            :



            game.stock > 0 ?


            <p className="low-stock">

              Últimas unidades ({game.stock})

            </p>



            :



            <p className="no-stock">

              Agotado

            </p>

          }







          {

            game.stock > 0 ?



            <button

              className="detail-btn"

              onClick={handleAddCart}

            >

              Agregar al carrito


            </button>




            :



            <button

              className="detail-btn disabled"

              disabled

            >

              Agotado


            </button>


          }




        </div>



      </div>



    </div>


  );


}



export default GameDetail;
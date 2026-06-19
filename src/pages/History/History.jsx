import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./History.css";

function History() {

  const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadOrders = async () => {

      try {

        const response = await axios.get(
          `https://pixelstore-back.onrender.com/api/ventas/${user.id}`
        );

        setOrders(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    if (user) {
      loadOrders();
    }

  }, [user]);

  if (loading) {
    return <h2>Cargando historial...</h2>;
  }

  return (

    <div className="history-page">

      <h1>Historial de Compras</h1>

      {orders.length === 0 ? (

        <p>No has realizado compras todavía.</p>

      ) : (

        orders.map((order, index) => (

          <div
            key={index}
            className="history-card"
          >

            <img
              src={order.image}
              alt={order.title}
            />

            <div>

              <h3>{order.title}</h3>

              <p>
                Fecha:
                {" "}
                {new Date(
                  order.fecha
                ).toLocaleDateString()}
              </p>

              <p>
                Precio:
                ${order.precio}
              </p>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default History;
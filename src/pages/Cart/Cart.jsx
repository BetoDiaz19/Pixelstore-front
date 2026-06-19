import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Cart.css";
import Swal from "sweetalert2";

function Cart() {

  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    clearCart
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) =>
      acc + Number(item.price),
    0
  );

  const handlePurchase = async () => {

  if (!user) {

    toast.error(
      "Debes iniciar sesión para comprar"
    );

    return;

  }

  if (cartItems.length === 0) {

    toast.error(
      "Tu carrito está vacío"
    );

    return;

  }
  // Validar existencia de stock

    const outOfStock = cartItems.find(
      item => item.stock <= 0
    );


    if(outOfStock){

      toast.error(
        `${outOfStock.title} ya no tiene stock`
      );

      return;

    }

  const gamesList = cartItems
    .map(
      (item) =>
        `<li style="margin-bottom:8px">
          ${item.title} - $${item.price}
        </li>`
    )
    .join("");

  const result = await Swal.fire({

    title: "🎮 Confirmar Compra",

    html: `
      <div style="text-align:left">

        <h3>Resumen del pedido</h3>

        <ul>
          ${gamesList}
        </ul>

        <hr>

        <h2>
          Total: $${total.toFixed(2)}
        </h2>

      </div>
    `,

    icon: "question",

    showCancelButton: true,

    confirmButtonText: "Confirmar Compra",

    cancelButtonText: "Cancelar"

  });

  if (!result.isConfirmed) {
    return;
  }

  try {

    await axios.post(
      "https://pixelstore-back.onrender.com/api/ventas",
      {
        usuario_id: user.id,
        productos: cartItems
      }
    );

    clearCart();

    await Swal.fire({

      icon: "success",

      title: "🎉 Compra realizada",

      text:
        "Tu pedido ha sido registrado correctamente.",
    });

    navigate("/history");

  } catch (error) {

    console.error(error);

    Swal.fire({

      icon: "error",

      title: "Error",

      text:
        "No se pudo procesar la compra"

    });

  }

};

  return (

    <div className="page-animation">

      <div className="cart-page">

        <h1 className="cart-title">
          Mi Carrito
        </h1>

        <hr />

        {
          cartItems.length === 0 ? (

            <h2>
              Tu carrito está vacío
            </h2>

          ) : (

            <>

              {
                cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="cart-item"
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <div className="cart-info">

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.category}
                      </p>

                      <h4>
                        ${item.price}
                      </h4>
                      <p>
                        Stock disponible: {item.stock}
                      </p>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Eliminar
                    </button>

                  </div>

                ))
              }

              <hr />

              <h2 className="cart-total">
                Total: ${total.toFixed(2)}
              </h2>

              <button
                className="detail-btn"
                onClick={handlePurchase}
              >
                Finalizar Compra
              </button>

            </>

          )
        }

      </div>

    </div>

  );

}

export default Cart;
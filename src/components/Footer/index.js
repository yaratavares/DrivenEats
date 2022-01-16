import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Order } from "../../common/context/Order";

export default function Footer() {
  const { order } = useContext(Order);
  const [finish, setFinish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (order.plate.order && order.drink.order && order.deserve.order) {
      setFinish(true);
    }
  }, [order]);

  function changePage() {
    navigate("/confirm");
  }

  return (
    <footer className="footer">
      <button
        className={`footer__button ${finish ? "finished" : ""}`}
        onClick={changePage}
      >
        <p className="footer__button__text">Selecione os 3 itens</p>
        <p className="footer__button__text">para fechar o pedido</p>
        <p className="footer__button__finish">Fechar pedido</p>
      </button>
    </footer>
  );
}

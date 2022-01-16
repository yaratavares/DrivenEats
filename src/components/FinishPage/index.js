/* eslint no-eval: 0 */
import { useContext } from "react";
import { ConfirmOrder } from "../../common/context/ConfirmOrder";
import { Order } from "../../common/context/Order";

export default function FinishPage() {
  const { setConfirmOrder } = useContext(ConfirmOrder);
  const { order } = useContext(Order);
  var calculo =
    order.plate.price + "+" + order.drink.price + "+" + order.deserve.price;

  while (calculo.includes(",")) {
    calculo = calculo.replace(",", ".");
  }
  calculo = eval(calculo).toFixed(2).replace(".", ",");

  return (
    <div className="pageOrder">
      <div className="pageOrder__box">
        <p className="pageOrder__box__title">Confirme seu pedido</p>

        <div className="pageOrder__box__order">
          <p>{order.plate.name}</p>
          <p>{order.plate.price}</p>
        </div>
        <div className="pageOrder__box__order">
          <p>{order.drink.name}</p>
          <p>{order.drink.price}</p>
        </div>
        <div className="pageOrder__box__order">
          <p>{order.deserve.name}</p>
          <p>{order.deserve.price}</p>
        </div>
        <div className="pageOrder__box__total">
          <p>TOTAL</p>
          <p>{`R$ ${calculo}`}</p>
        </div>
        <button className="pageOrder__box__button">
          Tudo certo, pode pedir!
        </button>
        <button
          className="pageOrder__box__cancel"
          onClick={() => setConfirmOrder(false)}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

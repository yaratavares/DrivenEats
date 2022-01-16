import { useContext } from "react";
import { Order } from "../../../common/context/Order";

export default function Plates({
  plate,
  index,
  indexClicks,
  setIndexClicks,
  type,
}) {
  const { order, setOrder } = useContext(Order);

  function clickProduct() {
    if (!order[type].order) {
      setIndexClicks([...indexClicks, index]);
    } else {
      const filterClicks = indexClicks.filter((i) => i !== order[type].index);
      setIndexClicks([...filterClicks, index]);
    }
    setOrder({
      ...order,
      [type]: { order: true, name: plate.name, price: plate.price, index },
    });
  }

  return (
    <button
      className={`box__product ${
        indexClicks.includes(index) ? "box__product__select" : ""
      }`}
      onClick={clickProduct}
    >
      <img src={plate.image} alt={`prato ${plate.name}`} />
      <p className="box__product__name">{plate.name}</p>
      <p className="box__product__description">{plate.description}</p>
      <p className="box__product__price">{`R$ ${plate.price}`}</p>
      <ion-icon name="checkmark-circle"></ion-icon>
    </button>
  );
}

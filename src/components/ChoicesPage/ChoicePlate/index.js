import { useState } from "react";
import { getPlate } from "../../../common/services/functionPlates";
import image from "../../../common/img/frango_yin_yang 1.jpg";

export default function ChoicePlate() {
  const listProduct = getPlate();
  const [click, setClick] = useState(false);

  function clickProduct() {
    setClick(!click);
  }

  return (
    <section>
      <h2 className="divider">Primeiro, seu prato</h2>
      <div className="list-product">
        {listProduct.map((plate, index) => (
          <div
            className={`product ${click ? "select" : ""}`}
            onClick={(e) => console.log(this)}
            key={`1${index}`}
          >
            <img src={image} className={click ? "select" : ""} />
            <p className="name">{plate.name}</p>
            <p className="description">{plate.description}</p>
            <p className="price">R$ 14,90</p>
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        ))}
      </div>
    </section>
  );
}

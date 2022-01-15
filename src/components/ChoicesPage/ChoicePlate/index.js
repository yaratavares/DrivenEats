import { getPlate } from "../../../common/services/driveneats";
import image from "../../../img/frango_yin_yang 1.jpg";

export default function ChoicePlate() {
  const listProduct = getPlate();

  return (
    <section>
      <h2 className="divider">Primeiro, seu prato</h2>
      <div className="list-product-1">
        {listProduct.map((plate, index) => (
          <div className="product" onclick="#href" key={`1${index}`}>
            <img src={image} />
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

import { getDeserve } from "../../../common/services/functionDeserve";
import image from "../../../common/img/pudim 1.jpg";

export default function ChoiceDeserve() {
  const listProduct = getDeserve();
  return (
    <section>
      <h2 class="divider">Por fim, sua sobremesa</h2>
      <div class="list-product">
        {listProduct.map((deserve) => (
          <div class="product" onclick="select_list_3(this)">
            <img src={image} />
            <div>
              <p class="name">{deserve.name}</p>
              <p class="description">{deserve.description}</p>
              <p class="price">{deserve.price}</p>
            </div>
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        ))}
      </div>
    </section>
  );
}

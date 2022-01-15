import { getDrinks } from "../../../common/services/functionDrinks";
import image from "../../../common/img/coquinha_gelada 1.jpg";

export default function ChoiceDrink() {
  const listProduct = getDrinks();

  return (
    <section>
      <h2 class="divider">Agora, sua bebida</h2>
      <div class="list-product">
        {listProduct.map((drink, index) => (
          <div class="product" key={`2${index}`} onclick="select_list_2(this)">
            <img src={image} />
            <div>
              <p class="name">{drink.name}</p>
              <p class="description">{drink.description}</p>
              <p class="price">{drink.price}</p>
            </div>
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        ))}
      </div>
    </section>
  );
}

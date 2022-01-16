import frangoImg from "../img/frango_yin_yang.jpg";
import brasilImg from "../img/brasileirada.jpg";
import lasanhaImg from "../img/lasanha.jpeg";
import parmegianaImg from "../img/parmegiana.jpg";
import pastelImg from "../img/pastel.jpg";
import strogonoffImg from "../img/strogonoff.jpg";
import sushiImg from "../img/sushi.jpg";

const listProduct = [
  {
    name: "Frango Yin Yang",
    description: "Um pouco de batata, um pouco de salada",
    price: "14,90",
    image: frangoImg,
  },
  {
    name: "Executivo Brasil",
    description: "Carne e salada",
    price: "16,90",
    image: brasilImg,
  },
  {
    name: "Lasanha Carne",
    description: "Suculenta",
    price: "17,90",
    image: lasanhaImg,
  },
  {
    name: "Parmegiana Frango",
    description: "Acompanha arroz",
    price: "18,90",
    image: parmegianaImg,
  },
  {
    name: "Pastel",
    description: "Sabores diversos",
    price: "8,90",
    image: pastelImg,
  },
  {
    name: "Strogonoff de Frango",
    description: "Acompanha batata palha",
    price: "20,90",
    image: strogonoffImg,
  },
  {
    name: "Rodízio de sushi",
    description: "Caro mas vale a pena",
    price: "45,90",
    image: sushiImg,
  },
];

export function getPlate() {
  return listProduct;
}

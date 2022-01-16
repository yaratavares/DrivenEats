import cocaImg from "../img/coquinha_gelada.jpg";
import aguaImg from "../img/agua.jpg";
import chopImg from "../img/chop.jpg";
import milkImg from "../img/milkshake.jpg";
import laranjaImg from "../img/sucodelaranja.jpeg";
import uvaImg from "../img/sucodeuva.jpeg";
import abacaxiImg from "../img/batida.jpg";
import yorgutImg from "../img/yorgut.jpeg";

const listProduct = [
  {
    name: "Coquinha gelada",
    description: "Lata 350ml",
    price: "R$ 8,90",
    image: cocaImg,
  },
  {
    name: "Água Natural",
    description: "Beba água",
    price: "R$ 3,90",
    image: aguaImg,
  },
  {
    name: "Chop Gelado",
    description: "Happy hour às 19",
    price: "R$ 12,90",
    image: chopImg,
  },
  {
    name: "Milkshake Chocolate",
    description: "Copo 900ml",
    price: "R$ 10,90",
    image: milkImg,
  },
  {
    name: "Suco de Laranja",
    description: "Vitamina C",
    price: "R$ 5,70",
    image: laranjaImg,
  },
  {
    name: "Suco de Uva",
    description: "Copo 350ml",
    price: "R$ 8,90",
    image: uvaImg,
  },
  {
    name: "Batida de Abacaxi",
    description: "Batido com amor",
    price: "R$ 15,90",
    image: abacaxiImg,
  },
  {
    name: "Yogurt",
    description: "Tem que ter",
    price: "R$ 5,90",
    image: yorgutImg,
  },
];

export function getDrinks() {
  return listProduct;
}

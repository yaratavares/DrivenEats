import pudimImg from "../img/pudim.jpg";
import brownieImg from "../img/brownie.jpg";
import churrosImg from "../img/churros.jpg";
import deliciaImg from "../img/deliciaabacaxi.jpg";
import especialImg from "../img/sobemesaespecial.png";
import surpresaImg from "../img/surpresadeuva.jpeg";
import sorveteImg from "../img/sorvete.jpg";

const listProduct = [
  {
    name: "Pudim",
    description: "Apenas pudim",
    price: "R$ 11,90",
    image: pudimImg,
  },
  {
    name: "Brownie",
    description: "Doce crocante para uma tarde fria",
    price: "R$ 15,90",
    image: brownieImg,
  },
  {
    name: "Churros",
    description: "Trio de churros com recheios diversos",
    price: "R$ 20,90",
    image: churrosImg,
  },
  {
    name: "Delícia de Abacaxi",
    description: "Abacaxi geladinho igual sorvete",
    price: "R$ 30,90",
    image: deliciaImg,
  },
  {
    name: "Deserve",
    description: "Premiada",
    price: "R$ 25,90",
    image: especialImg,
  },
  {
    name: "Casquinha Sorvete",
    description: "Não sei como vai chegar",
    price: "R$ 10,80",
    image: sorveteImg,
  },
  {
    name: "Surpresa de Uva",
    description: "Dez unidades da melhor uva",
    price: "R$ 8,90",
    image: surpresaImg,
  },
];

export function getDeserve() {
  return listProduct;
}

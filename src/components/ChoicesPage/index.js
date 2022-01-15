import { useState } from "react";
import { getDeserve } from "../../common/services/functionDeserve";
import { getDrinks } from "../../common/services/functionDrinks";
import { getPlate } from "../../common/services/functionPlates";
import Plates from "./Plates";

export default function ChoicesPages() {
  const [indexClicks, setIndexClicks] = useState([]);
  const listPlate = getPlate();
  const listDrink = getDrinks();
  const listDeserve = getDeserve();

  return (
    <main className="page">
      <section className="box">
        <h2 className="page__divider">Primeiro, seu prato</h2>
        <div className="page__list">
          {listPlate.map((plate, index) => (
            <Plates
              plate={plate}
              index={"A" + index}
              type={"plate"}
              indexClicks={indexClicks}
              setIndexClicks={setIndexClicks}
            />
          ))}
        </div>
      </section>
      <section className="box">
        <h2 className="page__divider">Agora, sua bebida</h2>
        <div className="page__list">
          {listDrink.map((drink, index) => (
            <Plates
              plate={drink}
              index={"B" + index}
              type={"drink"}
              indexClicks={indexClicks}
              setIndexClicks={setIndexClicks}
            />
          ))}
        </div>
      </section>
      <section className="box">
        <h2 className="page__divider">Por fim, sua sobremesa</h2>
        <div className="page__list">
          {listDeserve.map((deserve, index) => (
            <Plates
              plate={deserve}
              index={"C" + index}
              type={"deserve"}
              indexClicks={indexClicks}
              setIndexClicks={setIndexClicks}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

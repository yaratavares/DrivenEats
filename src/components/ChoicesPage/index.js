import { useState, useContext } from "react";
import { ConfirmOrder } from "../../common/context/ConfirmOrder";
import { getDeserve } from "../../common/services/functionDeserve";
import { getDrinks } from "../../common/services/functionDrinks";
import { getPlate } from "../../common/services/functionPlates";

import FinishPage from "../FinishPage";
import Plates from "./Plates";

export default function ChoicesPages() {
  const [indexClicks, setIndexClicks] = useState([]);
  const { confirmOrder } = useContext(ConfirmOrder);
  const listPlate = getPlate();
  const listDrink = getDrinks();
  const listDeserve = getDeserve();

  return (
    <>
      <main className="page">
        <section className="box">
          <h2 className="page__divider">Primeiro, seu prato</h2>
          <div className="page__list">
            {listPlate.map((plate, index) => (
              <Plates
                key={"A" + index}
                index={"A" + index}
                plate={plate}
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
                key={"B" + index}
                index={"B" + index}
                plate={drink}
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
                key={"C" + index}
                index={"C" + index}
                plate={deserve}
                type={"deserve"}
                indexClicks={indexClicks}
                setIndexClicks={setIndexClicks}
              />
            ))}
          </div>
        </section>
      </main>
      {confirmOrder ? <FinishPage /> : ""}
    </>
  );
}

import { useState } from "react";
import { createContext } from "react";

export const Order = createContext();

export default function OrderProvider({ children }) {
  const [order, setOrder] = useState({
    plate: { order: false, name: "", price: "" },
    drink: { order: false, name: "", price: "" },
    deserve: { order: false, name: "", price: "" },
  });

  return (
    <Order.Provider value={{ order, setOrder }}>{children}</Order.Provider>
  );
}

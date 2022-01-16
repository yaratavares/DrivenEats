import { useState } from "react";
import { createContext } from "react";

export const ConfirmOrder = createContext();

export default function ConfirmOrderProvider({ children }) {
  const [confirmOrder, setConfirmOrder] = useState(false);

  return (
    <ConfirmOrder.Provider value={{ confirmOrder, setConfirmOrder }}>
      {children}
    </ConfirmOrder.Provider>
  );
}

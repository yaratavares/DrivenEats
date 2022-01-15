import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderProvider from "../common/context/Order";
import ChoicesPages from "./ChoicesPage";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ChoicesPages />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </OrderProvider>
  );
}

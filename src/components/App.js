import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderProvider from "../common/context/Order";
import ChoicesPages from "./ChoicesPage";
import FinishPage from "./FinishPage";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ChoicesPages />}></Route>
          <Route path="/confirm" element={<FinishPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </OrderProvider>
  );
}

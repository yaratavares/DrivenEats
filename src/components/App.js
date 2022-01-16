import ConfirmOrderProvider from "../common/context/ConfirmOrder";
import OrderProvider from "../common/context/Order";
import ChoicesPages from "./ChoicesPage";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <OrderProvider>
      <ConfirmOrderProvider>
        <Header />
        <ChoicesPages />
        <Footer />
      </ConfirmOrderProvider>
    </OrderProvider>
  );
}

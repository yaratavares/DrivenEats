import ChoicesPages from "./ChoicesPage";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <>
      <div class="container show">
        <Header />
        <ChoicesPages />
      </div>

      <Footer />
    </>
  );
}

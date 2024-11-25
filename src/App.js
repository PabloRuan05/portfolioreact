import "../src/GlobalStyles/Globalstyles.scss";
import Footer from "./components/Footer/Footer";
import Projetos from "./components/Projetos/Projetos";
import Header from "./components/Header/Header";
import Perfil from "./components/Perfil/Perfil";
import Formacao from "./components/Formação/Formação";

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <Projetos />
      <Formacao />
      <Footer />
    </>
  );
}

export default App;

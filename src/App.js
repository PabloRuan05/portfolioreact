import "../src/GlobalStyles/Globalstyles.scss";
import Footer from "./components/Footer/Footer";
import Projetos from "./components/Projetos/Projetos";
import Header from "./components/Header/Header";
import Perfil from "./components/Perfil/Perfil";
import Formacao from "./components/Formação/Formação";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <Sobre />
      <Projetos />
      <Formacao />
      <Footer />
    </>
  );
}

export default App;

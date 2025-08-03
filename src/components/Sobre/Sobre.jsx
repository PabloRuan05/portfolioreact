import styles from "./styles.module.scss";
import { GiPaintBrush } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { GiSteamLocomotive } from "react-icons/gi";

function Sobre() {
  return (
    <section id="Sobre" className={styles.sobre}>
      <h1>Sobre</h1>
      <p className={styles.sobre}>
        Sou um desenvolvedor front-end apaixonado, com um olhar atento para o
        design e amor por criar experiências de usuário fluidas. Com expertise
        em tecnologias web modernas, transformo ideias em soluções digitais
        interativas.
      </p>
      <div className={styles.container}>
        <div className={styles.cardsobre}>
          <i>
            <GiPaintBrush />
          </i>
          <h2>Focado no Design</h2>
          <p className={styles.descsobre}>
            Criação de interfaces de usuário intuitivas e visualmente atraentes
            que melhoram a experiência do usuário.
          </p>
        </div>
        <div className={styles.cardsobre}>
          <i>
            <IoIosFlash />
          </i>
          <h2>Orientado para o Desempenho</h2>
          <p className={styles.descsobre}>
            Otimizando aplicativos para velocidade, acessibilidade e desempenho
            em todos os dispositivos.
          </p>
        </div>
        <div className={styles.cardsobre}>
          <i>
            <GiSteamLocomotive />
          </i>
          <h2>Com Mentalidade Inovadora</h2>
          <p className={styles.descsobre}>
            Manter-se atualizado com as últimas tecnologias e melhores práticas
            para fornecer soluções de ponta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;

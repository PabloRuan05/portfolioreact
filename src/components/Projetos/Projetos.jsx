import styles from "./styles.module.scss";
import CardProj from "../CardProj/CardProj";
import image from "../../assets/img/bloodrinks.png";
import gym from "../../assets/img/smartgym.png";

function Formacao() {
  return (
    <section id="Projetos" className={styles.projetos}>
      <h1>Projetos</h1>
      <div className={styles.container}>
        <CardProj
          link={"https://tubular-genie-5ef14e.netlify.app/"}
          linkGit={"https://github.com/PabloRuan05/bloodrinks"}
          image={image}
          title={"BlooDrinks"}
          description={
            "Projeto inspirado no Zé Delivery, desenvolvido utilizando o Framework Angular junto com HTML e CSS. "
          }
        />
        <CardProj
          link={"https://smartgym-eosin.vercel.app"}
          linkGit={"https://github.com/PabloRuan05/AcademiaSmartGym"}
          image={gym}
          title={"SmartGym"}
          description={
            "Landing Page para academia, projeto em andamento, desenvolvido com React."
          }
          />
      </div>
    </section>
  );
}

export default Formacao;

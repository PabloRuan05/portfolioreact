import CardForm from "../CardForm/CardForm";
import logica from "../../assets/img/Certificado - Lógica de Programação com JavaScript.png";
import figma from "../../assets/img/figma to dev.png";
import git from "../../assets/img/git e versionamento.png";
import senai from "../../assets/img/senai22.png";
import styles from "./styles.module.scss";
import reactimg from "../../assets/img/React.png";

function Formacao() {
  return (
    <section id="Formação" className={styles.formacao}>
      <h1>Formação</h1>
      <div className={styles.container}>
        <CardForm image={logica} certificado={""} />
        <CardForm image={git} certificado={""} />
        <CardForm image={figma} certificado={""} />
        <CardForm image={reactimg} certificado={""} />
        <CardForm image={senai} certificado={""} />
      </div>
    </section>
  );
}

export default Formacao;

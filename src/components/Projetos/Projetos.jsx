import styles from "./styles.module.scss";
import CardProj from "../CardProj/CardProj";
import image from "../../assets/img/bloodrinks.png";
import trip from "../../assets/img/blootrip.png";
import fit from "../../assets/img/bloofit.png";
import academia from "../../assets/img/academia.png";
import zapdelivery from "../../assets/img/zapdelivery.png";

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
          link={"https://bloo-trip.vercel.app/"}
          linkGit={"https://github.com/PabloRuan05/BlooTrip"}
          image={trip}
          title={"BlooTrip"}
          description={
            "Site de dicas de viagem feito em React, cards responsivos, efeito de css com javascript."
          }
        />
        <CardProj
          link={"https://bloofit.vercel.app/"}
          linkGit={"https://github.com/PabloRuan05/Blooafid"}
          image={fit}
          title={"BlooFit"}
          description={"Site para agrupar links de afiliado."}
        />
        <CardProj
          link={"https://academia-ten-black.vercel.app/"}
          linkGit={"https://github.com/PabloRuan05/academia"}
          image={academia}
          title={"Academia"}
          description={
            "V2 Landing Page para academia, projeto em andamento, desenvolvido com React."
          }
        />
        <CardProj
          link={"https://zapdelivery.vercel.app/"}
          linkGit={"https://github.com/PabloRuan05/zapdelivery"}
          image={zapdelivery}
          title={"ZapDelivery"}
          description={
            "Site para facilitar a comunicação entre restaurantes e seus clientes através do Whatsapp."
          }
        />
      </div>
    </section>
  );
}

export default Formacao;

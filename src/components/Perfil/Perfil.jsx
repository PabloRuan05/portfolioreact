import styles from "./styles.module.scss";
import logo from "../../assets/img/34.png";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

function Perfil() {
  return (
    <section className={styles.perfil}>
      <div className={styles.container}>
        <img src={logo} alt="" />
        <div className={styles.grade}>
          <h1>Pablo Muniz</h1>
          <h2>Desenvolvedor Front-End</h2>
          <div className={styles.gradelinks}>
            <a
              target="blank"
              href="https://www.linkedin.com/in/pablo-muniz-641544267/"
            >
              <div>
                <FaLinkedin />
              </div>
            </a>
            <a target="blank" href="https://github.com/PabloRuan05">
              <div>
                <FaGithub />
              </div>
            </a>
            <a target="blank" href="mailto:apablor580@gmail.com">
              <div>
                <IoMdMail />
              </div>
            </a>
            <a target="blank" href="tel:+5598991102463">
              <div>
                <BsFillTelephoneFill />
              </div>
            </a>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1BtEE6821IAS3YuDANAxESjv21fWJON_f/view?usp=sharing"
            >
              <div>
                <FaFilePdf />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;

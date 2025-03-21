import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

function CardProj(props) {
  return (
    <div className={styles.cardform}>
      <a href={props.link} target="blank">
        <img src={props.image} alt="" />
      </a>
      <h1>{props.title}</h1>
      <p className="description">{props.description}</p>
      <div className={styles.wrapper}>
        <a className={styles.link} href={props.link} target="blank">
          <i>
            <IoMdLink />
          </i>
        </a>
        <a className={styles.git} href={props.linkGit} target="blank">
          <i>
            <FaGithub />
          </i>
        </a>
      </div>
    </div>
  );
}

export default CardProj;

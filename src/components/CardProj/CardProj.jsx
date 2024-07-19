import styles from "./styles.module.scss";

function CardProj(props) {
  return (
    <div className={styles.cardform}>
      <a href={props.link} target="blank">
        <img src={props.image} alt="" />
      </a>
      <h1>{props.title}</h1>
      <p className="description">{props.description}</p>
      <a href={props.linkGit} target="blank">
        <button>Conferir no Github</button>
      </a>
    </div>
  );
}

export default CardProj;

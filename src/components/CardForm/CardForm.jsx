import styles from "./styles.module.scss";

function CardForm(props) {
  return (
    <div className={styles.cardform}>
      <img src={props.image} alt={props.certificado} />
    </div>
  );
}

export default CardForm;

import styles from "./styles.scss";

function Header() {
  return (
    <header>
      <nav id={styles.navbar}>
        <a href="index.html">Pablo Muniz</a>
        <ul id="linknav">
          <li>
            <a href="#Projetos">Projetos</a>
          </li>
          <li>
            <a href="#Formação">Formação</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

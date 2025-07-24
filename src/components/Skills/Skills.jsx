import styles from "./styles.module.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

function Skills() {
  return (
    <section id="Skills" className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.container}>
        <div className={styles.cardskl}>
          <p>
            <img
              src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&amp;logo=git&amp;logoColor=white"
              alt="Git"
            ></img>
          </p>

          <div className={styles.cardskl}>
            {" "}
            <p>
              <img
                src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&amp;logo=yarn&amp;logoColor=white"
                alt="Yarn"
              ></img>
            </p>
          </div>
          <div className={styles.cardskl}>
            {" "}
            <p>
              <img
                src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&amp;logo=git&amp;logoColor=white"
                alt="Git"
              ></img>
            </p>
          </div>
          <div className={styles.cardskl}>
            {" "}
            <p>
              <img
                src="https://img.shields.io/badge/Figma-696969?style=for-the-badge&amp;logo=figma&amp;logoColor=figma"
                alt="Figma"
              ></img>
            </p>
          </div>
          <div className={styles.cardskl}>
            {" "}
            <p>
              <img
                src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&amp;logo=visual-studio-code&amp;logoColor=white"
                alt="Vscode"
              ></img>
            </p>
          </div>
          <div className={styles.cardskl}>
            {" "}
            <p>
              <img
                src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&amp;logo=Postman&amp;logoColor=white"
                alt="Postman"
              ></img>
            </p>
          </div>
          <div className={styles.cardskl}>
            {" "}
            <p>
              <img
                src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&amp;logo=npm&amp;logoColor=white"
                alt="NPM"
              ></img>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

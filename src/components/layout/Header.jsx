import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img src={logo} alt="Calmscious Logo" className={styles.logoImg} />
      </div>
    </header>
  );
}

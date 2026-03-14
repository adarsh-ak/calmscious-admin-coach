import styles from "./Footer.module.css";
import { FOOTER } from "../../constants/data";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>Calmscious</div>

      <div className={styles.grid}>
        {/* Col 1 */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Explore Calmscious</h4>
          {FOOTER.explore.map((l) => (
            <a key={l} href="#" className={styles.link}>{l}</a>
          ))}
          <h4 className={`${styles.heading} ${styles.mt}`}>Corporate &amp; Institutional Wellness</h4>
          {FOOTER.corporate.map((l) => (
            <a key={l} href="#" className={styles.link}>{l}</a>
          ))}
        </div>

        {/* Col 2 */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Therapy Programs &amp; Mental Health Conditions</h4>
          {FOOTER.therapy.map((l, i) => (
            <a key={i} href="#" className={styles.link}>{l}</a>
          ))}
        </div>

        {/* Col 3 */}
        <div className={styles.col}>
          <h4 className={styles.heading}>Contact details</h4>
          <p className={styles.contact}>
            <strong>Address:</strong> First floor, 135, Thangavel Nagar,
            New Fairlands, Salem, Tamil Nadu 636016
          </p>
          <p className={styles.contact}>
            <strong>Phone:</strong>{" "}
            <a href="tel:08870209982" className={styles.underline}>08870209982</a>
          </p>
          <p className={styles.contact}>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@calmscious.com">contact@calmscious.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
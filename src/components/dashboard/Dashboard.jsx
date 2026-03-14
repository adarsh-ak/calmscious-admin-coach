import styles from "./Dashboard.module.css";
import { STATS } from "../../constants/data";

export function Dashboard() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Dashboard</h2>
      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.analytics}`}>
          <span className={styles.cardLabel}>Analytics</span>
        </div>
        {STATS.map((s) => (
          <div key={s.id} className={styles.card}>
            <div className={styles.cardLabel}>{s.label}</div>
            <div className={styles.cardValue}>{s.value}</div>
            <div className={`${styles.change} ${s.positive ? styles.pos : styles.neg}`}>
              {s.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

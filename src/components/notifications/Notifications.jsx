import styles from "./Notifications.module.css";
import { NOTIFICATIONS } from "../../constants/data";

export function Notifications() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Notification Management</h2>
      <div className={styles.panel}>
        {NOTIFICATIONS.map((n) => (
          <div key={n.id} className={styles.item}>
            <div className={styles.title}>{n.title}</div>
            <div className={styles.message}>{n.message}</div>
            {n.hasRemind && (
              <button className={styles.btnRemind}>Remind Client</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "./Sessions.module.css";
import { UPCOMING_SESSIONS, RECENT_SESSIONS } from "../../constants/data";

function SessionItem({ s, isRecent }) {
  const statusClass = s.status === "Completed" ? styles.green
    : s.status === "Cancelled" ? styles.red
    : styles.green;

  return (
    <div className={styles.item}>
      <div className={styles.itemLeft}>
        <div className={styles.itemType}>{s.type}</div>
        <div className={styles.itemMeta}>
          {s.patient && <span>Patient Name: {s.patient}<br /></span>}
          Coach: {s.coach}<br />
          {s.date}
          {s.duration && <><br />Session Duration: {s.duration}</>}
          {!isRecent && (
            <><br />Meet link: <a className={styles.meetLink} href="#">{s.link}</a></>
          )}
        </div>
        {s.showActions && (
          <div className={styles.rowActions}>
            <button className={styles.btnOutline}>Prescription</button>
            <button className={styles.btnTeal}>View Transcription</button>
          </div>
        )}
        
      </div>
      <div className={styles.itemRight}>
        <span className={statusClass}>{s.status}</span>
        <button className={styles.btnTeal}>View Details</button>
        
      </div>
      
    </div>
  );
}

export function Sessions() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Session Management</h2>
      <div className={styles.grid}>
        {/* Upcoming */}
        <div className={styles.panel}>
          <h3 className={styles.panelTitle}>Upcoming Sessions</h3>
          {UPCOMING_SESSIONS.map((s) => (
            <SessionItem key={s.id} s={s} isRecent={false} />
          ))}
        </div>

        {/* Recent */}
        <div className={`${styles.panel} ${styles.panelBordered}`}>
          <h3 className={styles.panelTitle}>Recent Sessions</h3>
          {RECENT_SESSIONS.map((s) => (
            <SessionItem key={s.id} s={s} isRecent={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

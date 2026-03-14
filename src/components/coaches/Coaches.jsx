import styles from "./Coaches.module.css";
import { COACHES, COACH_APPLICATIONS, QUALIFICATIONS } from "../../constants/data";
import { useCoachForm } from "../../hooks/useCoachForm";

export function Coaches() {
  const { form, set, submit } = useCoachForm();

  return (
    <section>
      <h2 className={styles.sectionTitle}>Coach Management</h2>
      <div className={styles.grid}>

        {/* Add a Coach Form */}
        <div className={`${styles.card} ${styles.formCard}`}>
          <h3 className={styles.cardTitle}>Add a Coach</h3>

          {[
            { label: "Name*",          field: "name",  type: "text"  },
            { label: "Email*",         field: "email", type: "email" },
            { label: "Phone Number*",  field: "phone", type: "text"  },
            { label: "Date of Birth*", field: "dob",   type: "text"  },
          ].map(({ label, field, type }) => (
            <div key={field} className={styles.fieldWrap}>
              <label className={styles.fieldLabel}>{label}</label>
              <input
                type={type}
                className={styles.input}
                value={form[field]}
                onChange={(e) => set(field, e.target.value)}
              />
            </div>
          ))}

          <div className={styles.fieldWrap}>
            <label className={styles.fieldLabel}>Qualification*</label>
            <select className={styles.input} value={form.qualification} onChange={(e) => set("qualification", e.target.value)}>
              <option value=""></option>
              {QUALIFICATIONS.map((q) => <option key={q}>{q}</option>)}
            </select>
          </div>

          <div className={styles.fieldWrap}>
            <label className={styles.fieldLabel}>Expertise*</label>
            <input
              type="text"
              placeholder=""
              className={styles.input}
              value={form.expertise}
              onChange={(e) => set("expertise", e.target.value)}
            />
          </div>

          <div className={styles.fieldWrap}>
            <label className={styles.fieldLabel}>Availability</label>
            <textarea
              placeholder=""
              className={`${styles.input} ${styles.textarea}`}
              value={form.availability}
              onChange={(e) => set("availability", e.target.value)}
            />
          </div>

          <button className={styles.btnSubmit} onClick={submit}>Add Coach</button>
        </div>

        {/* Applications */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Applications</h3>
          {COACH_APPLICATIONS.map((app) => (
            <div key={app.id} className={styles.appItem}>
              <div>
                <div className={styles.appName}>{app.name}</div>
                <div className={styles.appRole}>{app.role}</div>
                <button className={styles.btnView}>View Details</button>
              </div>
              <div className={styles.appActions}>
                <button className={styles.btnApprove}>✓</button>
                <button className={styles.btnReject}>✕</button>
              </div>
            </div>
          ))}
        </div>

        {/* Coaches Grid */}
        <div className={styles.card}>
          <div className={styles.coachesHeader}>
            <h3 className={styles.cardTitle}>Coaches</h3>
            <span className={styles.seeAll}>See All...</span>
          </div>
          <div className={styles.coachGrid}>
            {COACHES.map((c) => (
              <div key={c.id} className={styles.coachCard} style={{ background: c.bg }}>
                <span className={styles.ratingBadge}>4.8 ★</span>
                <div className={styles.coachLabel}>
                  <div className={styles.coachName}>{c.name}</div>
                  <div className={styles.coachRole}>{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

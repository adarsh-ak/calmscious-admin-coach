import styles from "./AdminDashboard.module.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Sessions } from "../components/sessions/Sessions";
import { Coaches } from "../components/coaches/Coaches";
import { Notifications } from "../components/notifications/Notifications";

export default function AdminDashboard() {
  return (
    <div className={styles.page}>
      <Header />

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Admin <span className={styles.heroTeal}>Portal</span>
        </h1>
      </div>

      <main className={styles.main}>
        <p className={styles.welcome}>Welcome Dr. Mehar</p>
        <Dashboard />
        <Sessions />
        <Coaches />
        <Notifications />
      </main>

      <Footer />
    </div>
  );
}

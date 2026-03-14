import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from './pages/AdminDashboard';
import CoachDashboard from './pages/CoachDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/coach" element={<CoachDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
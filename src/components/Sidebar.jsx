// src/components/Sidebar.js
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/tables">Tables</Link></li>
      <li><Link to="/charts">Charts</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
      <li><Link to="/kanban">Kanban</Link></li>
    </ul>
  </nav>
);

export default Sidebar;

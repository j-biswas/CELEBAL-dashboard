// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
import TablePage from './pages/TablePage';
import ChartPage from './pages/ChartPage';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Routes>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/tables" element={<TablePage />} />
            <Route path="/charts" element={<ChartPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

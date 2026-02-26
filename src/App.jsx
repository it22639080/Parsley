import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Parsley from './pages/Parsley';
import Celery from './pages/Celery';
import Mint from './pages/Mint';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Header with navigation */}
        <header className="header">
          <nav>
            <ul>
              <li><Link to="/">Parsley</Link></li>
              <li><Link to="/celery">Celery</Link></li>
              <li><Link to="/mint">Mint</Link></li>
              <li>
        <a
          href="https://docs.google.com/presentation/d/1OCXrAvkbYBeTn3u2oEvd2V4Od41_WoPF/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Presentation
        </a>
      </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Parsley />} />
          <Route path="/celery" element={<Celery />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

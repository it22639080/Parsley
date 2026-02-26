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
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.js';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< LoginForm />} />
        <Route exact path="/login" element={< LoginForm />} />
        <Route exact path="/dashboard" element={< Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

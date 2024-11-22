import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReusableProfiles from './pages/ReusableProfiles';
import PropsPractice from './pages/PropsPractice';
import FormValidation from './pages/FormValidation';

const App = () => {
  return (
      <Router>
        <div>
          <h1>Intermediate React Project</h1>
          <nav>
            <ul>
              <li><Link to="/profiles">Reusable Profiles</Link></li>
              <li><Link to="/props-practice">Props Practice</Link></li>
              <li><Link to="/form-validation">Form Validation</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/profiles" element={<ReusableProfiles />} />
            <Route path="/props-practice" element={<PropsPractice />} />
            <Route path="/form-validation" element={<FormValidation />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;

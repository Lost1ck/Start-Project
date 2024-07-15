import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/PrivacyRoutes/ProtectedRoute';
import styles from './components/styles/App.module.scss';
import Header from './components/Header';

const isAdmin: boolean = false; // Заменить на реальную логику доступа

interface IisAdmin {
  isAdmin: boolean;
  Header: React.FC;
}

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
};

function AppContent() {
  return (
    <>
      <Header isAdmin={isAdmin} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute isAllowed={isAdmin} redirectTo="/">
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

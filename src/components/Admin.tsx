import { Link, Route, Routes, useMatch } from 'react-router-dom';
import Settings from './Settings';
import React from 'react';

const Admin: React.FC = () => {
  let match = useMatch('/admin/*');
  let url = match?.pathname || '/admin';

  return (
    <div>
      <h1>Admin</h1>
      <ul>
        <li>
          <Link to={`${url}/settings`}>Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="settings" element={<Settings />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Admin;

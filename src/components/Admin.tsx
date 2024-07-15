import React from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import NotFound from './NotFound';
import Settings from './Settings';

export default function Admin() {
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
}

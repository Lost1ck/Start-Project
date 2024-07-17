import { Link } from 'react-router-dom';
import styles from './shared/styles/Header.module.scss';
import React from 'react';

interface IisAdmin {
  isAdmin: boolean;
}

const Header: React.FC<IisAdmin> = ({ isAdmin }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isAdmin && (
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

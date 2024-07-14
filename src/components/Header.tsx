import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.scss';

interface IisAdmin {
  isAdmin: boolean;
}

export default function Header({isAdmin}:  IisAdmin) {
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
  )
}

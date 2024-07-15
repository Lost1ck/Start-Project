import React from 'react';
import styles from './styles/Header.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from '../features/CounterSlice';

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <h2>Home</h2>
        <p>Welcome to the Home Page!</p>
      </div>
      <div>
        <div>
          <button
            className={styles.button}
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className={styles.button}
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementAsync(5))}
          >
            Increment by 5 async
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import styles from './shared/styles/buttons.module.scss';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from '../features/CounterSlice';

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
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
<<<<<<< HEAD
          <button className={styles.button} onClick={() => dispatch(increment())}>+</button>
          {/* <button className={styles.button} onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
          <button className={styles.button} onClick={() => dispatch(incrementAsync(5))}>Increment by 5 async</button> */}
=======
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
>>>>>>> origin/main
        </div>
      </div>
    </>
  );
};

export default Home;

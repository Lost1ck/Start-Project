import React, { ChangeEvent, useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useState<{ text: string; index: number }[]>([]);
  const [input, setInput] = useState('');

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }
  function handleAddTask() {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, index: tasks.length }]);
    setInput('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Todo</h1>
        <div className={styles.inputContainer}>
          <input
            type='text'
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className={styles.input}
          />
          <button type='button' onClick={handleAddTask} className={styles.button}>
            ADD
          </button>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.index} className={styles.taskListItem}>
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

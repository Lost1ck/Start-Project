import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';

const App = () => {
  const [input, setInput] = useState<string>('');
  const [tasks, setTasks] = useState<{ text: string; id: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasLoadedTasks = useRef(false);

  useEffect(() => {
    if (!hasLoadedTasks.current) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
      hasLoadedTasks.current = true;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, id: uuidv4() }]);
    setInput('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTask();
    }
  }

  function onClickDelete(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Todoshka</h1>
        <div className={styles.inputContainer}>
          <input
            ref={inputRef}
            className={styles.input}
            type='text'
            value={input}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          <button className={styles.button} onClick={addTask}>
            Add
          </button>
        </div>
        <ul className={styles.taskList}>
          <>
            {tasks.map((task) => (
              <li key={task.id} className={styles.taskListItem}>
                <p>{task.text}</p>
                <button className={styles.button} onClick={() => onClickDelete(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </>
        </ul>
      </div>
    </div>
  );
};

export default App;

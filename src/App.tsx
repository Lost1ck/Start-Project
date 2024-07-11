import { ChangeEvent, useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState<{ text: string; index: number }[]>([])
  const [input, setInput] = useState('')

  const handleAddTask = () => {
    if (input.trim() === '') return
    setTasks([...tasks, { text: input, index: tasks.length }])
    setInput('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div style={{ marginLeft: '45vw' }}>
      <div>
        <h1>Todo</h1>
        <input type='text' value={input} onChange={handleChange} />
        <button type='button' onClick={handleAddTask}>
          ADD
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.index}>{task.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

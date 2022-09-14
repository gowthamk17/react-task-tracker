import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 11,
      text: "do work",
      date: "today",
      reminder: true
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) =>
        task.id === id ?
          { ...task, reminder: !task.reminder }
          : task
    ));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="app">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
        : <h3>No Task to show  </h3>}

    </div>
  );
}

export default App;
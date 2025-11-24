// App.jsx
import { useState, useEffect } from "react";
import styles from "./App.module.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add(styles.dark);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove(styles.dark);
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTasks(tasks.map((t) => (t.id === editId ? { ...t, text: input } : t)));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleEdit = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}> To-Do App</h1>

          <button className={styles.themeBtn} onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <div className={styles.inputRow}>
          <input
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button className={styles.addBtn} onClick={handleAdd}>
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <div className={styles.list}>
          {tasks.map((task) => (
            <div key={task.id} className={styles.item}>
              <p className={styles.text}>{task.text}</p>

              <div className={styles.actions}>
                <button
                  className={styles.editBtn}
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

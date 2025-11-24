import { useState } from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem({
  todo,
  onDelete,
  startEdit,
  saveEdit,
  editId,
}) {
  const [value, setValue] = useState(todo.text);

  return (
    <div className={styles.card}>
      {editId === todo.id ? (
        <>
          <input
            className={styles.editInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => saveEdit(todo.id, value)}
            className={styles.save}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className={styles.text}>{todo.text}</p>
          <div className={styles.buttons}>
            <button onClick={() => startEdit(todo.id)} className={styles.edit}>
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className={styles.delete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

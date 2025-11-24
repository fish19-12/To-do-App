import { useState } from "react";
import styles from "./TodoInput.module.css";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const add = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <div className={styles.box}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder="Write your task..."
      />
      <button onClick={add} className={styles.btn}>
        Add
      </button>
    </div>
  );
}

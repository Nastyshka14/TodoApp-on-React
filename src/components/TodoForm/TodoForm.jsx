import { useState } from "react";

import styles from "./TodoForm.module.css";

export function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__header}>
        <input
          className={styles.form__input}
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Enter your todo"
        />
        <button className={styles.form__btn} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

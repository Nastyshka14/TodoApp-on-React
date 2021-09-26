import styles from "./ButtonsSelect.module.css";

export function ButtonsSelect({ removeTodos, selectTodos }) {
  return (
    <div className={styles.buttonsSelect}>
      <div
        className={`${styles.buttonDeleteSelected} ${styles.buttonSelect}`}
        onClick={() => removeTodos()}
      >
        Delete selected
      </div>
      <div
        className={`${styles.buttonDoneSelected} ${styles.buttonSelect}`}
        onClick={() => selectTodos()}
      >
        Done selected
      </div>
    </div>
  );
}

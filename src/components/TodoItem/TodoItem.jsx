import styles from "./TodoItem.module.css";

export function TodoItem({
  todo,
  removeTodo,
  checkTodo,
  selectTodo,
  editTodo,
}) {
  const classes = [
    styles.todoItem__text,
    todo.isSelected ? `${styles.todoItem__text_select}` : ``,
    todo.isCompleted ? `${styles.todoItem__text_done}` : ``,
  ];
  return (
    <div className={styles.todoItem}>
      <div
        contentEditable={todo.isEditable ? true : false}
        className={classes.join(" ")}
        onDoubleClick={() => selectTodo(todo.id)}
      >
        {todo.title}
      </div>
      <div className={styles.btnsWrapp}>
        <div
          className={styles.todoItem__btn_checked}
          onClick={() => checkTodo(todo.id)}
        ></div>
        <div
          className={styles.todoItem__btn_delete}
          onClick={() => removeTodo(todo.id)}
        ></div>
        <div
          className={styles.todoItem__btn_edit}
          onClick={() => editTodo(todo.id)}
        ></div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { ButtonsSelect } from "../ButtonsSelect/ButtonsSelect";

import { TodoForm } from "../TodoForm/TodoForm";
import { TodoItem } from "../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputValue) => {
    if (inputValue) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        title: inputValue,
        isSelected: false,
        isCompleted: false,
        isEditable: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const selectTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isSelected: !todo.isSelected } : { ...todo }
      ),
    ]);
  };

  const editTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isEditable: !todo.isEditable } : { ...todo }
      ),
    ]);
  };

  const checkTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      ),
    ]);
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const removeTodos = () => {
    setTodos([...todos.filter((todo) => !todo.isSelected && todo.isCompleted)]);
  };

  const selectTodos = () => {
    setTodos([
      ...todos.map((todo) =>
        todo.isSelected === true
          ? {
              ...todo,
              isCompleted: todo.isCompleted === false,
            }
          : { ...todo }
      ),
    ]);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header__title}>TODO LIST {todos.length}</h1>
      </header>
      <div className={styles.form__container}>
        <TodoForm addTodo={addTodo} />
        <div className={styles.todoItems}>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                checkTodo={checkTodo}
                selectTodo={selectTodo}
                editTodo={editTodo}
              />
            );
          })}
        </div>
      </div>
      <ButtonsSelect removeTodos={removeTodos} selectTodos={selectTodos} />
    </div>
  );
}

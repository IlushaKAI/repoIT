// Импортируем необходимые хуки из библиотеки React
import { useEffect, useState } from "react";
// Импортируем компонент формы для создания новых задач
import { NewTodoForm } from "./NewTodoForm";
// Импортируем файл стилей для оформления приложения
import "./styles.css";
// Импортируем компонент списка задач
import { TodoList } from "./TodoList";

// Основной компонент приложения
export default function App() {
  // Создаем состояние для хранения списка задач
  // Используем функцию инициализации состояния для загрузки данных из localStorage
  const [todos, setTodos] = useState(() => {
    // Получаем сохраненные задачи из localStorage
    const localValue = localStorage.getItem("ITEMS");
    // Если данных нет, возвращаем пустой массив задач
    if (localValue == null) return [];
    // Преобразуем JSON строку обратно в массив объектов
    return JSON.parse(localValue);
  });

  // Эффект для сохранения задач в localStorage при каждом изменении списка
  // Срабатывает каждый раз при обновлении массива todos
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Функция для добавления новой задачи
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, // Сохраняем все существующие задачи
        {
          id: crypto.randomUUID(), // Генерируем уникальный идентификатор
          title, // Заголовок задачи из параметра
          completed: false, // Начальный статус - не выполнено
        },
      ];
    });
  }

  // Функция для переключения статуса выполнения задачи
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      // Преобразуем массив, изменяя только задачу с нужным id
      return currentTodos.map((todo) => {
        // Если нашли задачу с указанным id
        if (todo.id === id) {
          // Возвращаем новый объект с обновленным статусом completed
          return { ...todo, completed };
        }
        // Для остальных задач изменений нет
        return todo;
      });
    });
  }

  // Функция для удаления задачи по идентификатору
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      // Создаем новый массив без задачи с указанным id
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // Рендеринг компонентов приложения
  return (
    <>
      {/* Форма для созданисчя новых задач */}
      <NewTodoForm onSubmit={addTodo} />
      {/* Заголовок списка задач */}
      <h1 className="header">Todo List</h1>
      {/* Компонент списка задач с передачей необходимых функций и данных */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

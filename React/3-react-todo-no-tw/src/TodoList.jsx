// Импортируем компонент TodoItem, который отвечает за отображение отдельной задачи
import { TodoItem } from "./TodoItem"

// Компонент для отображения списка всех задач
// Принимает следующие пропсы:
// - todos: массив объектов задач для отображения
// - toggleTodo: функция для изменения статуса выполнения задачи
// - deleteTodo: функция для удаления задачи
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    // Неупорядоченный список с классом для стилизации
    <ul className="list">
      {/* Условный рендеринг: если список задач пуст, отображаем сообщение */}
      {todos.length === 0 && "No Todos"}
      
      {/* Преобразуем массив задач в массив компонентов TodoItem с помощью метода map */}
      {todos.map(todo => {
        return (
          // Для каждой задачи создаем компонент TodoItem
          // {...todo} - передаем все свойства объекта задачи (id, title, completed) как отдельные пропсы
          // key - уникальный ключ для оптимизации рендеринга React
          // toggleTodo и deleteTodo - передаем функции управления задачами
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
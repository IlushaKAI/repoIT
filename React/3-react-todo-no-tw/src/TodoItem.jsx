// Компонент отдельного элемента списка задач
// Принимает следующие пропсы:
// - completed: статус выполнения задачи (выполнена/не выполнена)
// - id: уникальный идентификатор задачи
// - title: заголовок/название задачи
// - toggleTodo: функция для изменения статуса выполнения задачи
// - deleteTodo: функция для удаления задачи из списка
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    // Элемент списка для отображения одной задачи
    <li>
      {/* Метка-обертка для чекбокса и текста задачи */}
      <label>
        {/* Чекбокс для изменения статуса выполнения задачи
            - checked связывает состояние компонента с отображением флажка
            - onChange вызывает функцию toggleTodo при изменении состояния */}
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {/* Текст задачи */}
        {title}
      </label>
      {/* Кнопка удаления задачи
          - onClick вызывает функцию deleteTodo при нажатии
          - btn-danger задает стиль для кнопки удаления */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
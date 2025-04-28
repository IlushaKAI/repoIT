// Импортируем хук useState из библиотеки React для управления состоянием компонента
import { useState } from "react";

// Компонент формы для создания новых задач
// Принимает функцию onSubmit в качестве пропса, которая будет вызвана при создании новой задачи
export function NewTodoForm({ onSubmit }) {
  // Создаем состояние для хранения текста новой задачи
  // newItem - текущее значение, setNewItem - функция для его обновления
  const [newItem, setNewItem] = useState("");

  // Функция-обработчик отправки формы
  function handleSubmit(e) {
    // Предотвращаем стандартное поведение браузера (перезагрузку страницы)
    e.preventDefault();

    // Проверка: если поле пустое, прекращаем выполнение функции
    if (newItem === "") return;

    // Вызываем функцию, переданную через пропс, передавая текст новой задачи
    onSubmit(newItem);

    // Очищаем поле ввода после создания задачи
    setNewItem("");
  }

  // Рендерим форму с полем ввода и кнопкой добавления
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        {/* Метка для поля ввода, связанная с ним через id */}
        <label htmlFor="item">New Item</label>
        {/* Управляемое поле ввода: значение берётся из состояния, 
            при изменении обновляем состояние */}
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      {/* Кнопка отправки формы */}
      <button className="btn">Add</button>
    </form>
  );
}

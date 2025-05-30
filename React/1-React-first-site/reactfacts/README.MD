## Вкратце чему научились на примере этого проекта

- Познакомились с базовой структурой react проекта
- Узнали, что на самом деле всё react приложение по сути рендерится в `index.html` в теге `<div id="root"></div>`
- Узнали отличие между декларативным и императивным программированием, и что в React используется именно первое
- Познакомились с принципом компонентности, создали 2 компонента(Navbar.jsx и Main.jsx) и отрендерили их в в App.jsx

## Теория

### 1. Куда React помещает все элементы, которые я создаю в JSX, когда мы вызываем

```jsx
root.render();
```

**Объяснение:**  
Все элементы, созданные с помощью JSX, рендерятся в элемент, который мы указываем при создании корневого узла (например, `<div id="root">`). Это делается с помощью `ReactDOM.createRoot()`.

```jsx
// index.html
<div id="root"></div>;

// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### 2. Что отобразится в моей консоли, если я выполню эту строку кода:

```jsx
console.log(<h1>Hello world!</h1>);
```

**Объяснение:**  
В консоли будет выведён объект, представляющий React-элемент. Это не строка HTML, а JS-объект, содержащий информацию о типе элемента, его свойствах (props) и других внутренних данных.

```jsx
console.log(<h1>Hello world!</h1>);
// Вывод: объект вида { type: "h1", props: { children: "Hello world!" }, ... }
```

### 3. Что не так с этим кодом:

```jsx
root.render(
        <h1>Привет</h1>
        <p>Это мой сайт!</p>
)
```

Одновременно можно отобразить только 1 родительский элемент. Этот родительский элемент может иметь столько дочерних элементов, сколько вы хотите.

**Объяснение:**  
В данном примере все верно, так как `<section>` является одним родительским элементом, содержащим несколько дочерних. Если бы элементы не были обёрнуты в общий контейнер, то возникла бы ошибка.

### 4. Что значит быть «декларативным», а не «императивным»?

**Объяснение:**

- _Императивный_ подход требует указания пошаговых инструкций, как выполнить задачу (например, вручную изменять DOM).

```jsx
const header = document.createElement("h1");
header.textContent = "Привет, мир!";
document.getElementById("root").appendChild(header);
```

- _Декларативный_ подход позволяет просто описать конечный результат, а фреймворк (React) сам управляет тем, как достичь этого результата.

```jsx
function App() {
  return <h1>Привет, мир!</h1>;
}
```

### 5. Что значит быть «композитным»?

**Объяснение:**  
Композиционность означает, что небольшие, независимые компоненты можно комбинировать вместе, чтобы создать сложный интерфейс. Это повышает повторное использование кода и упрощает поддержку приложения.

```jsx
// Компонент Button.jsx
function Button({ label }) {
  return <button>{label}</button>;
}

// Компонент App.jsx
import Button from "./Button";

function App() {
  return (
    <div>
      <h1>Мой сайт</h1>
      <Button label="Нажми меня" />
    </div>
  );
}
```

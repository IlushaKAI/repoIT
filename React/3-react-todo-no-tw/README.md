# react-todo-no-tw

Проект todo листа, со всем реализованным функционалом и обычным style.css

# Status:

готов к установке tailwind css

**Вкратце:**
Установим tw css и prettier plugin, чтобы было удобнее работать

# Теория

    Цели занятия:
    1. Устанавить tailwind css, используя сборщик vite
    2. Попробовать поработать с tailwind css

Можно даже комбинировать уже существующие className с утилитами tailwind css

Например:

```jsx
<div className="form-row bg-amber-200">Строчка ввода задачи</div>
```

Здесь form-row - это уже существующий обычный класс css, а bg-amber-200 - это утилититарный класс tailwind css

# Практика

1. Нужно установить tailwind и плагин для работы с Vite через терминал. НУЖНО убедится, что вы находитесь в папке проекта перед выполнением команды

```
npm install tailwindcss @tailwindcss/vite
```

2. Затем нужно вручную указать в vite.config.js, что вы используете tailwind css.

Сделать это можно примерно таким способом:
![](./gitimages/Установка%20TailwindCSS%20и%20необходимых%20утилит%20в%20проект-1744039088852.png) 3. Затем в основном файле styles.css, нужно импортировать tailwind.

Так как по сути именно в этом файл будет ретранслироваться весь tw код. На этом же этапе можно задать базовые стили для популярных элементов
![](./gitimages/Установка%20TailwindCSS%20и%20необходимых%20утилит%20в%20проект-1744039230559.png)

### Дополнительные инструменты

Также настоятельно рекомендуется установка плагина VS Code благодаря которому у вас будут появляться удобные подсказки - Tailwind CSS InteliSense

Для активации его работы необходимо ПРОСТО создать файл tailwind.config.js в папке проекта

Также стоит произвести рекомендованные настройки, о которых говорится на странице плагина

Также стоит установить форматер tailwind кода, чтобы держать все стили в одном порядке и меньше путаться в них. Для этого:

1. В папке проекта необходимо выполнить команду

```
npm install -D prettier prettier-plugin-tailwindcss
```

2. Указать в файле package.json, что мы используем этот плагин
   ![](./gitimages/Установка%20TailwindCSS%20и%20необходимых%20утилит%20в%20проект-1744039851480.png)

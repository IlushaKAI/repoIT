# propscats

стартовый набор файлов для изучения props

# Теория

    Цели занятия:
    1.Еще раз попрактиковаться в создании компонентов
    2.Изучить работу props

Вопросы и ответы

1. Чего мы можем достичь при помощи props?
   Сделать компоненты более реюзабельными
2. Как передать prop в компонент

```jsx
<MyAwesomeHeader title="???" />
```

3. Можно ли передать кастомный prop (например, `blahblahblah={true}`) в нативный DOM-элемент(например `<div blahblahblah={true}>`)? Почему да или почему нет?

Нет, потому что JSX, который мы используем для описания нативных DOM-элементов, преобразуется в НАСТОЯЩИЕ DOM-элементы с помощью React.
А настоящие DOM-элементы обладают только теми свойствами/атрибутами, которые предусмотрены спецификацией HTML (а таких, как blahblahblah , в ней нет)

4. Как «извлечь» props и использовать его в компоненте?

```jsx
unction Contact(props) {
  return (
    <article className="contact-card">
      <img src={props.img} alt="Photo of Mr. Whiskerson" />
      <h3>{props.name}</h3>
    </article>
  )
}
```

5. Какой тип данных представляет из себя prop?
   Объект, из которого мы и извлекаем все необходимые параметры

# Практика на занятие

Есть большое количество одинаковых карточек котов, нужно реализовать один компонент карточки, с возможностью передачи в него данных через пропс

```jsx
// Задачи:
// - Создайте компонент «Contact» в другом файле
// - Перенесите в этот файл одну из приведенных ниже карточек контактов
// - импортируйте и отобразите 4 экземпляра этой карточки контакта.
// - Подумайте заранее: в чем проблема данной реализации?
```

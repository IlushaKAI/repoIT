// Задачи:
// - Создайте компонент «Contact» в другом файле
// - Перенесите в этот файл одну из приведенных ниже карточек контактов
// - импортируйте и отобразите 4 экземпляра этой карточки контакта.
// - Подумайте заранее: в чем проблема данной реализации?

import Contact from "../components/Contact";

function App() {
  return (
    <div className="contacts">
      {/* вызываем компонент Contact и передаем ему свойства
        img, name, phone и email */}
      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;

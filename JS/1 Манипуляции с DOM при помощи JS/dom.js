// Создать div
const div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper');
// Поместить его внутрь тэга body
const body = document.body;
body.append(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const h1 = document.createElement('h1');
h1.textContent = "Dom";
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement('beforebegin', h1);
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
// =================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/240px-Venus_globe.jpg';
// 2. Добавить атрибут width со значением 240
img.width = 500;
// 3. Добавить класс super
img.classList.add('super');
img.classList.add('duper');
// 4. Добавить свойство alt со значением "Super Man"
img.alt = 'Venus';
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
console.log(img);
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами

// Поместить этот DIV до элемента <ul></ul>

// Добавить для 2-го параграфа класс text

// Удалить 1-й параграф

// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} - ${year}</h2>
            <p> Возраст авто - ${curYear - year} лет</p>
            <p> Цвет: ${color}</p>
            
        </div>
    `   
}
// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>

// Создать новый DIV с классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]
const carsHTML = carsList.map(car => 
    {return generateAutoCard(car.brand, car.color, car.year)}).join('')
console.log(carsHTML);
// Поместить эти 3 карточки внутрь DIV с классом autos
carsDiv.innerHTML = carsHTML;

// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement('beforebegin', carsDiv);
// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

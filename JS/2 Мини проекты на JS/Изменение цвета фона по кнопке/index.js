// Получаем элемент body из DOM
const body = document.getElementsByTagName("body")[0]

// Функция для установки заданного цвета фона
function setColor(name) {
    body.style.backgroundColor = name;
}

// Функция для генерации случайного цвета фона
function randomColor() {
    // Генерируем случайные значения для красного цвета (0-255)
    const red = Math.round(Math.random() * 255) 
    // Генерируем случайные значения для зеленого цвета (0-255)
    const green = Math.round(Math.random() * 255)
    // Генерируем случайные значения для синего цвета (0-255)
    const blue = Math.round(Math.random() * 255)
    
    // Формируем строку RGB из полученных значений
    const color = `rgb(${red}, ${green}, ${blue})`
    // Устанавливаем сгенерированный цвет как фон body
    body.style.backgroundColor = color;
}

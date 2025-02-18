// Получаем элементы формы, ввода города и карточки из DOM
const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")

// API ключ для доступа к данным о погоде
const apiKey = "4cc756f8c0648ac4427955275fa36614"

weatherForm.addEventListener("submit", async event =>{

    // Предотвращаем стандартное поведение формы
    event.preventDefault()

    // Получаем значение введенного города
    const city = cityInput.value

    // Если город введен
    if(city){
        try{
            // Получаем данные о погоде для введенного города
            const weatherData = await getWeatherData(city)
            // Отображаем полученные данные о погоде
            displayWeatherInfo(weatherData)
        }
        catch(error){
            // Выводим ошибку в консоль и отображаем сообщение об ошибке
            console.error(error)
            // displayError(error)
        }
    }
    else{
        // Отображаем сообщение об ошибке, если город не введен
        displayError("Введите город, дружище")
    }
})

// Функция для получения данных о погоде с API
async function getWeatherData(city){
    // Формируем URL для запроса к API с введенным городом и API ключом
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    // Выполняем запрос к API
    const response = await fetch(apiUrl)

    // Если ответ не успешен, выбрасываем ошибку
    if(!response.ok){
        throw new Error("Не удалось достучаться до сервиса")
    }

    // Возвращаем ответ в формате JSON
    return await response.json()
}

// Функция для отображения полученных данных о погоде
function displayWeatherInfo(data){
    // Деструктурируем необходимые данные из ответа API
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]
    } = data

    // Очищаем содержимое карточки и устанавливаем стиль отображения
    card.textContent = "";
    card.style.display = "flex"

    // Создаем элементы для отображения информации о погоде
    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    // продолжить по аналогии

    // Добавляем классы для стилизации созданных элементов
    cityDisplay.classList.add("cityDisplay")
    // продолжить по аналогии

    cityDisplay.textContent = city;
    // Добавляем созданные элементы в карточку
    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    // продолжить по аналогии
}

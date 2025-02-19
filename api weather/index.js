// WEATHER APP

// Получаем элементы формы, ввода города и карточки из DOM
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// API ключ для доступа к данным о погоде
const apiKey = "4cc756f8c0648ac4427955275fa36614";

// Добавляем обработчик события отправки формы
weatherForm.addEventListener("submit", async event => {

    // Предотвращаем стандартное поведение формы
    event.preventDefault();

    // Получаем значение введенного города
    const city = cityInput.value;

    // Если город введен
    if(city){
        try{
            // Получаем данные о погоде для введенного города
            const weatherData = await getWeatherData(city);
            // Отображаем полученные данные о погоде
            displayWeatherInfo(weatherData);
        }
        catch(error){
            // Выводим ошибку в консоль и отображаем сообщение об ошибке
            console.error(error);
            displayError(error);
        }
    }
    else{
        // Отображаем сообщение об ошибке, если город не введен
        displayError("Please enter a city");
    }
});

// Функция для получения данных о погоде с API
async function getWeatherData(city){

    // Формируем URL для запроса к API с введенным городом и API ключом
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Выполняем запрос к API
    const response = await fetch(apiUrl);

    // Если ответ не успешен, выбрасываем ошибку
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    // Возвращаем ответ в формате JSON
    return await response.json();
}

// Функция для отображения полученных данных о погоде
function displayWeatherInfo(data){

    // Деструктурируем необходимые данные из ответа API
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;

    // Очищаем содержимое карточки и устанавливаем стиль отображения
    card.textContent = "";
    card.style.display = "flex";

    // Создаем элементы для отображения информации о погоде
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    // Устанавливаем текстовое содержимое созданных элементов
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°С`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // Добавляем классы для стилизации созданных элементов
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Добавляем созданные элементы в карточку
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

// Функция для получения соответствующего эмодзи на основе ID погоды
function getWeatherEmoji(weatherId){

    // Возвращаем соответствующий эмодзи на основе ID погоды
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}

// Функция для отображения сообщения об ошибке
function displayError(message){

    // Создаем элемент для отображения сообщения об ошибке
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    // Очищаем содержимое карточки, устанавливаем стиль отображения и добавляем сообщение об ошибке
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}

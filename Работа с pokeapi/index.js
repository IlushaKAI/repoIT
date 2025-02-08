async function fetchData() {
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase() // получаем значения из инпут поля
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) // асинхронный запрос fetch с проверкой
        if(!response.ok){ // если запрос не завершиля с кодом ok, то выбрасываем ошибку
            throw new Error("Не удалось достучаться до ресурса")
        }

        const data = await response.json() // ожидаем ответа и присваиваем этот ответ переменной data
        const pokemonSprite = data.sprites.front_default // обращаемся к содержимому json файла, который записан в переменную data -> получаем по сути ссылку на sprite и присваиваем ее переменной 
        const imgElement = document.getElementById('pokemonSprite') // обращаемся к DOM модели и получаем элемент с id pokemonSprite
        imgElement.src = pokemonSprite // присваиваем этому элементу ссылку на sprite
        imgElement.style.display = "block" // меняем свойство display на block, чтобы картинка отобразилась
        console.log(data)
    }
    catch(error){ // если произошла ошибка, то выводим ее в консоль
        console.error(error)
    }
    
}
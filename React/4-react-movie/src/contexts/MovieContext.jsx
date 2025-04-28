// Импортируем необходимые хуки из React: createContext для создания контекста,
// useState для управления состоянием, useContext для доступа к контексту,
// useEffect для выполнения побочных эффектов
import { createContext, useState, useContext, useEffect } from "react";

// Создаем новый контекст для хранения состояния избранных фильмов и функций работы с ними
const MovieContext = createContext();

// Создаем и экспортируем пользовательский хук для удобного доступа к контексту из любого компонента
export const useMovieContext = () => useContext(MovieContext);

// Компонент-провайдер, который предоставит доступ к контексту всем дочерним компонентам
export const MovieProvider = ({ children }) => {
  // Инициализируем состояние избранных фильмов, загружая его из localStorage
  // Используем ленивую инициализацию (функция в useState), чтобы код выполнился только один раз
  const [favorites, setFavorites] = useState(() => {
    // Пытаемся получить сохраненные фильмы из localStorage
    const storedFavs = localStorage.getItem("favorites");
    // Если есть, парсим и возвращаем, иначе возвращаем пустой массив
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  // Эффект загрузки больше не нужен, так как мы загружаем при инициализации

  // Используем useEffect для сохранения избранных фильмов в localStorage при изменении состояния
  useEffect(() => {
    // Преобразуем массив избранных фильмов в JSON строку и сохраняем в localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // Выводим информацию о сохранении для отладки
    console.log("Избранные фильмы сохранены:", favorites);
  }, [favorites]); // Эффект срабатывает только при изменении массива favorites

  // Функция для добавления фильма в избранное
  const addToFavorites = (movie) => {
    // Обновляем состояние, добавляя новый фильм к существующим избранным
    // Используем функциональную форму обновления для доступа к предыдущему состоянию
    setFavorites((prev) => [...prev, movie]);
  };

  // Функция для удаления фильма из избранного по его идентификатору
  const removeFromFavorites = (movieId) => {
    // Фильтруем массив, оставляя только фильмы с другими идентификаторами
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Функция для проверки, находится ли фильм в избранном
  const isFavorite = (movieId) => {
    // Проверяем, есть ли в массиве избранных фильм с указанным идентификатором
    return favorites.some((movie) => movie.id === movieId);
  };

  // Объект со всеми значениями и функциями, которые будут доступны через контекст
  const value = {
    favorites, // Массив избранных фильмов
    addToFavorites, // Функция для добавления фильма в избранное
    removeFromFavorites, // Функция для удаления фильма из избранного
    isFavorite, // Функция для проверки наличия фильма в избранном
  };

  // Оборачиваем дочерние компоненты в Provider, передавая им доступ к контексту
  // все дочерние компоненты получат доступ к значениям и функциям из value
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

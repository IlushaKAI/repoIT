// Импортируем компонент карточки фильма
import MovieCard from "../components/MovieCard";
// Импортируем хуки для управления состоянием и эффектами
import { useState, useEffect } from "react";
// Импортируем функции для работы с API фильмов
import { searchMovies, getPopularMovies } from "../services/api";
// Импортируем стили для компонента
import "../css/Home.css";

// Компонент главной страницы
function Home() {
  // Состояние для хранения поискового запроса
  const [searchQuery, setSearchQuery] = useState("");
  // Состояние для хранения списка фильмов
  const [movies, setMovies] = useState([]);
  // Состояние для хранения ошибок при загрузке
  const [error, setError] = useState(null);
  // Состояние для отслеживания процесса загрузки
  const [loading, setLoading] = useState(true);

  // Эффект, который выполняется при монтировании компонента
  useEffect(() => {
    // Асинхронная функция для загрузки популярных фильмов
    const loadPopularMovies = async () => {
      try {
        // Получаем популярные фильмы из API
        const popularMovies = await getPopularMovies();
        // Сохраняем полученные фильмы в состояние
        setMovies(popularMovies);
      } catch (err) {
        // Логируем ошибку в консоль
        console.log(err);
        // Устанавливаем сообщение об ошибке
        setError("Failed to load movies...");
      } finally {
        // В любом случае завершаем загрузку
        setLoading(false);
      }
    };

    // Вызываем функцию загрузки
    loadPopularMovies();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

  // Обработчик отправки формы поиска
  const handleSearch = async (e) => {
    // Предотвращаем стандартное поведение формы
    e.preventDefault();
    // Проверяем, не пустой ли запрос
    if (!searchQuery.trim()) return
    // Проверяем, не идет ли уже загрузка
    if (loading) return

    // Устанавливаем состояние загрузки
    setLoading(true)
    try {
        // Получаем результаты поиска из API
        const searchResults = await searchMovies(searchQuery)
        // Обновляем список фильмов
        setMovies(searchResults)
        // Сбрасываем ошибку, если она была
        setError(null)
    } catch (err) {
        // Логируем ошибку в консоль
        console.log(err)
        // Устанавливаем сообщение об ошибке поиска
        setError("Failed to search movies...")
    } finally {
        // В любом случае завершаем загрузку
        setLoading(false)
    }
  };

  // Возвращаем JSX для рендеринга
  return (
    <div className="home">
      {/* Форма поиска фильмов */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Отображаем сообщение об ошибке, если она есть */}
      {error && <div className="error-message">{error}</div>}

      {/* Условный рендеринг: показываем индикатор загрузки или список фильмов */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {/* Отображаем каждый фильм в виде карточки */}
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

// Экспортируем компонент для использования в других частях приложения
export default Home;

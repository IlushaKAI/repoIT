import { createRoot } from "react-dom/client";
import App from "./App";

// создаем корневой элемент для рендеринга приложения
// и передаем ему элемент с id root из index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { pageLanguage, texts } from "./texts/texts";

document.documentElement.lang = pageLanguage;
document.title = texts.pageTitle;

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Не найден элемент #root в index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

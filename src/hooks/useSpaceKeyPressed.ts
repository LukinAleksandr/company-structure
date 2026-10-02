import { useEffect, useState } from "react";

// Отслеживает, зажат ли пробел (в Figma пробел + перетаскивание = перемещение)
export function useSpaceKeyPressed(): boolean {
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Space") {
        event.preventDefault();
        setIsSpacePressed(true);
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.code === "Space") {
        setIsSpacePressed(false);
      }
    }

    // Если окно потеряло фокус с зажатым пробелом — keyup не придёт
    function handleWindowBlur() {
      setIsSpacePressed(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return isSpacePressed;
}

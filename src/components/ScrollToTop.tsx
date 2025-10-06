import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Wenn ein Anker vorhanden ist (z. B. #about), dorthin scrollen
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } 
    // Wenn KEIN Anker, immer nach oben
    else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash, key]); // 👈 auch "key" hier wichtig!

  return null;
};

export default ScrollToTop;

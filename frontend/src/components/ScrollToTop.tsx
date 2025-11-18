// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Si navegas a un ancla (#seccion), deja que el navegador haga el scroll nativo
    if (hash) return;

    // Con HashRouter, usa key para forzar el efecto en cada navegación
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, key, hash]);

  return null;
}

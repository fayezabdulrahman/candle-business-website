import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToLocation() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
      return;
    }

    window.scrollTo({ top: 0 });
  }, [hash, pathname]);

  return null;
}

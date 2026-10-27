import { useEffect, useRef } from "react";

export function useOutsideClick(handler) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener("pointerdown", handleClick);

    return () => document.removeEventListener("pointerdown", handleClick);
  }, [handler]);

  return ref;
}

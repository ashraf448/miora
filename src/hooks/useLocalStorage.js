import { useCallback, useEffect, useState } from "react";

/**
 * useState متزامن مع localStorage.
 * - آمن لو التخزين مش متاح (وضع التصفح الخاص / ممتلئ).
 * - بيتزامن بين التابات عن طريق حدث storage.
 */
export default function useLocalStorage(key, initialValue) {
  const [initial] = useState(() => initialValue);

  const read = useCallback(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? initial : JSON.parse(raw);
    } catch {
      return initial;
    }
  }, [key, initial]);

  const [value, setValue] = useState(read);

  const set = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          /* التخزين غير متاح — نكمل في الذاكرة فقط */
        }
        return resolved;
      });
    },
    [key]
  );

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === key) setValue(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key, read]);

  return [value, set];
}

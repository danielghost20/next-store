"use client";

import { useState, useEffect } from "react";

export default function useLocalStorage(key: string, initialState: any) {
  const [value, setValue] = useState<any>(() => {
    if (localStorage !== undefined) {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : initialState;
    }

  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

"use client"

import { useState } from "react";

type StorageValue<T> = T | null;

export const useLocalStorage = <T>(
  keyName: string,
  defaultValue: T
): [StorageValue<T>, (newValue: T) => void] => {
  const [storedValue, setStoredValue] = useState<StorageValue<T>>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value !== null) {
        return JSON.parse(value) as T;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

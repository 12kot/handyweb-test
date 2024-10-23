"use client"

import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
  const [debValue, setDebValue] = useState<T>(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return debValue;
};

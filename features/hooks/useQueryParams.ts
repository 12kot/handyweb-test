"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

export const useQueryParams = <T>(paramName: string) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [paramValue, setParamValue] = useState<T | null>(null);

  useEffect(() => {
    const params = searchParams.get(paramName) as T;
    if (params) {
      setParamValue(params);
    }
  }, [searchParams]);

  const setQueryParam = (value: string | number | null) => {
    const strValue = value?.toString();

    const params = new URLSearchParams(window.location.search);
    if (typeof strValue === 'string') {
      params.set(paramName, strValue);
    } else {
      setParamValue(null);
      params.delete(paramName);
    }
    router.push(`?${params.toString()}`, undefined);
  };

  return { paramValue, setQueryParam };
};

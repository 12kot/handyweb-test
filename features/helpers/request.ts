export const sendSsrRequest = async <T>(
  url: string,
  initValue: T
): Promise<T> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
    return await response.json();
  } catch {
    return initValue;
  }
};

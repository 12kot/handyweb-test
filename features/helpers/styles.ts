import cxx from "classnames/bind";

export const cx = (...rest: any[]) => {
  // @ts-expect-error cxx
  return cxx(...rest);
};

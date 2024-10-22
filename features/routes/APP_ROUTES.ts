export const APP_ROUTES: IRoute = {
  MAIN: {
    text: "main",
    path: "/",
  },

  DELIVERY: {
    text: "delivery",
    path: "/delivery",
  },

  CONTACT: {
    text: "contact",
    path: "/contact",
  },

  BLOG: {
    text: "blog",
    path: "/blog",
  },
};

interface IRoute {
  [str: string]: {
    text: string;
    path: string;
  };
}

export const NAVIGATION: IRoute = {
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

export const APP_ROUTES: IRoute = {
  ...NAVIGATION,
  PRODUCT: {
    text: "product",
    path: "/product",
  },
};

interface IRoute {
  [str: string]: {
    text: string;
    path: string;
  };
}

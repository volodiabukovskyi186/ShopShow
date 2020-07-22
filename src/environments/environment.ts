// const host = "http://api.show-u.loc/";
// const host = "http://showu.zzz.com.ua/";
const host = "//api.showu.com.ua/";
const hoststatic = "//api.showu.com.ua/";

export const environment = {
  production: false,

  categories: host + "client/category", //assets/data/categories.json
  manufacturers: host + "client/manufacturers",
  products: host + "client/products",
  data: "assets/data",
  host: host,
  hoststatic: hoststatic,
  signin: host + `signin`,
  signup: host + `signup`,
  promotion: host + "client/promotion",
  productPromotion: host + "client/product_promotion",
  role: {
    roles: host + `roles`,
    role: host + `role`,
  },
  reviews: host + `reviews`,
};

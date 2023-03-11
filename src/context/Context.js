import { createContext, useContext, useReducer } from "react";
import React from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "../context/Reducer";
const Cart = createContext();

function Context({ children }) {
  faker.seed(97);
  const product = [...Array(20)].map(() => ({
    _id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(400, 400, true),
    inStock: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    product: product,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export function CartState() {
  return useContext(Cart);
}

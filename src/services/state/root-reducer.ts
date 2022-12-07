import { combineReducers } from "redux";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

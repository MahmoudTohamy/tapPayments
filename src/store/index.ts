/** @format */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import balance from "../reducers/balance.ts";

export const store = createStore(balance, applyMiddleware(thunk));

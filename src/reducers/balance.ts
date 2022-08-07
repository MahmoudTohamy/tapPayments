/** @format */

import { ADD_BALANCE } from "../Constants/balanceConstant.ts";

const initialState = { balance: 0 };
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BALANCE: {
      return { ...state, balance: state.balance + action.data };
    }
    default:
      return state;
  }
}

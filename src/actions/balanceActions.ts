/** @format */

import { ADD_BALANCE } from "../Constants/balanceConstant.ts";
import { getAPI, postAPI } from "../Services/balanceServices.ts";
export const balanceActions = { getBalance, addBalance };
function getBalance() {
  return async (dispatch) => {
    try {
      let response = await getAPI("balance");
      dispatch({ type: ADD_BALANCE, data: response.balance });
    } catch (error) {
      return error;
    }
  };
}
function addBalance(params) {
  return async (dispatch) => {
    try {
      let response = await postAPI("balance", params);
      if (response.status === 200) {
        dispatch({ type: ADD_BALANCE, data: params.amount });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
}

import { SIGN_UP, UPDATE_PASSWORD } from "./types";

export const createAccount = (account: any) => ({
  type: SIGN_UP,
  payload: account,
});
export const updateAccount = (account: any) => ({
  type: UPDATE_PASSWORD,
  payload: account,
});

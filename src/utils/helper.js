import { formatNearAmount } from "near-api-js/lib/utils/format";
import environment from "./config";
const nearEnv = environment("testnet");
export async function accountBalance() {
  return formatNearAmount(
    (await window.walletConnection.account().getAccountBalance()).total,
    2
  );
}

export async function getAccountId() {
  return window.walletConnection.getAccountId();
}

export function login() {
  window.walletConnection.requestSignIn(nearEnv.contractName);
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}

 const serverUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:34567"
    : "https://yge.wvi.mybluehost.me/test/coop-soc-backend";
export const apiURL = serverUrl + "/api";

const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  fetch(apiURL + url)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      error(err);
    });
};

/**
 * _postApi()
 * An helper function that posts data to the database
 * @params route (string) => the api route to submit on
 * @params data (object) => item to be submitted
 * @params callback => optional callback function
 */
const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {

  fetch(apiURL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => success(response))
    .catch((err) => error(err));
};

/**
 * _deleteData()
 * An helper function that deletes data from the database
 * @params route (String) => the api route
 * @params data (object) => object containing the details of
 * the item to be deleted
 * @params callback (func) => optional callback
 */
const _deleteApi = (
  route,
  data = {},
  callback = (f) => f,
  err_cb = (f) => f
) => {
  fetch(apiURL + route, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : null,
  })
    .then((raw) => raw.json())
    .then((response) => callback(response))
    .catch((err) => err_cb(err));
};

const _updateApi = (
  url = "",
  data = [],
  success = (f) => f,
  error = (f) => f
) => {
  fetch(`${apiURL + url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => success(response))
    .catch((err) => error(err));
};

export { _updateApi, _deleteApi, _postApi, _fetchApi };
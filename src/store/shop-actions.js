import { uiActions } from "./ui";
import { shopActions } from "./shop";

import apiCall from "../lib/api";
import { CONNECT_QUERY, COLLECTIONS_QUERY } from "../lib/api";

async function startHttpRequest(dispatch) {
  dispatch(uiActions.resetHttpUpdate());

  dispatch(
    uiActions.setHttpUpdate({
      status: "pending",
      error: null,
      data: null
    })
  );
}

async function sendRequest(domain, token, query) {
  const response = await apiCall(domain, token, query);

  if (!response.ok) {
    throw new Error("Request failed!");
  }

  const data = await response.json();

  return data;
}

export function sendConnectData(domain, token) {
  return async (dispatch) => {
    await startHttpRequest(dispatch);
    
    try {
      const shopData = await sendRequest(domain, token, CONNECT_QUERY);

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: null
        })
      );

      dispatch(
        shopActions.connect({
          name: shopData.data.shop.name,
          domain,
          token,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setHttpUpdate({
          status: "error",
          error: "Unable to connect your store. Please try again.",
          data: null
        })
      );
    }
  };
}

export function getCollections(domain, token) {
  return async (dispatch) => {
    startHttpRequest(dispatch);

    try {
      const collectionsData = await sendRequest(domain, token, COLLECTIONS_QUERY);

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: collectionsData.data.collections.edges
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setHttpUpdate({
          status: "error",
          error: "Unable to get collections.",
          data: null
        })
      );
    }
  }
}
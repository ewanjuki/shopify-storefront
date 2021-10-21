import { uiActions } from "./ui";
import { shopActions } from "./shop";

import apiCall from "../lib/api";
import {
  CONNECT_QUERY,
  COLLECTIONS_QUERY,
  FETCH_FIRST_PRODUCTS,
  fetchFirstProductsByCollHandle,
  fetchNextProducts,
  fetchPreviousProducts,
  fetchNextProductsByCollHandle,
  fetchPreviousProductsByCollHandle,
  fetchProduct,
} from "../lib/api";

async function startHttpRequest(dispatch) {
  dispatch(uiActions.resetHttpUpdate());

  dispatch(
    uiActions.setHttpUpdate({
      status: "pending",
      error: null,
      data: null,
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
    startHttpRequest(dispatch);

    try {
      const shopData = await sendRequest(domain, token, CONNECT_QUERY);

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: null,
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
          data: null,
        })
      );
    }
  };
}

export function getCollections(domain, token) {
  return async (dispatch) => {
    startHttpRequest(dispatch);

    try {
      const collectionsData = await sendRequest(
        domain,
        token,
        COLLECTIONS_QUERY
      );

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: collectionsData.data.collections.edges,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setHttpUpdate({
          status: "error",
          error: "Unable to get collections.",
          data: null,
        })
      );
    }
  };
}

export function getProducts(
  domain,
  token,
  starting = true,
  whichPage = "next",
  cursor = ""
) {
  return async (dispatch) => {
    startHttpRequest(dispatch);

    let query = FETCH_FIRST_PRODUCTS;

    if (!starting && whichPage === "next") {
      query = fetchNextProducts(cursor);
    }

    if (!starting && whichPage === "previous") {
      query = fetchPreviousProducts(cursor);
    }

    try {
      const productsData = await sendRequest(domain, token, query);

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: productsData.data.products,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setHttpUpdate({
          status: "error",
          error: "Unable to get products.",
          data: null,
        })
      );
    }
  };
}

export function getProductsByCollectionHandle(
  domain,
  token,
  handle,
  starting = true,
  whichPage = "next",
  cursor = ""
) {
  return async (dispatch) => {
    startHttpRequest(dispatch);

    let query = fetchFirstProductsByCollHandle(handle);

    if (!starting && whichPage === "next") {
      query = fetchNextProductsByCollHandle(handle, cursor);
    }

    if (!starting && whichPage === "previous") {
      query = fetchPreviousProductsByCollHandle(handle, cursor);
    }

    try {
      const productsData = await sendRequest(domain, token, query);

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: productsData.data.collection.products,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setHttpUpdate({
          status: "error",
          error: "Unable to get products.",
          data: null,
        })
      );
    }
  };
}

export function getProduct(domain, token, handle) {
  return async (dispatch) => {
    startHttpRequest(dispatch);

    const query = fetchProduct(handle);
    
    try {
      const productData = await sendRequest(domain, token, query);

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
          data: productData.data.product,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.setHttpUpdate({
          status: "error",
          error: "Unable to get products.",
          data: null,
        })
      );
    }
  };
}

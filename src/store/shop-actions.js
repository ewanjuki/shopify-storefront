import { uiActions } from "./ui";
import { shopActions } from "./shop";

import apiCall from "../lib/api";

export function sendConnectData(domain, token) {
  return async (dispatch) => {
    dispatch(
      uiActions.setHttpUpdate({
        status: "pending",
        error: null,
      })
    );

    const sendRequest = async () => {
      const query = `{
                shop {
                    name
                }
            }`;

      const response = await apiCall(domain, token, query);

      if (!response.ok) {
        throw new Error("Unable to connect your store.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const shopData = await sendRequest();

      dispatch(
        uiActions.setHttpUpdate({
          status: "completed",
          error: null,
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
        })
      );
    }
  };
}

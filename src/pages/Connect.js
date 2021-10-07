import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import ConnectForm from "../components/Connect/ConnectForm";
import { sendConnectData } from "../store/shop-actions";

function Connect() {
  const dispatch = useDispatch();
  const history = useHistory();

  const httpUpdate = useSelector((state) => state.ui.httpUpdate);
  const { status, error } = httpUpdate;

  useEffect(() => {
    if (status === "completed") {
      history.push("/");
    }
  }, [status, history]);

  function onConnectHandler({ domain, token }) {
    dispatch(sendConnectData(domain, token));
  }

  return (
    <ConnectForm status={status} error={error} onConnect={onConnectHandler} />
  );
}

export default Connect;

import { useRef } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./ConnectForm.module.css";

function ConnectForm(props) {
  const enteredDomainRef = useRef();
  const enteredTokenRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredDomain = enteredDomainRef.current.value;
    const enteredToken = enteredTokenRef.current.value;

    props.onConnect({ domain: enteredDomain, token: enteredToken });
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {props.status === "pending" && <LoadingSpinner />}
      {props.error && <p>{props.error}</p>}
      <div>
        <h2>Welcome</h2>
        <p>
          Please enter your Shopify store domain and Storefront API Access Token
          to connect your store
        </p>
      </div>
      <div className={classes.control}>
        <label htmlFor="domain">Shop Domain</label>
        <input type="text" id="domain" ref={enteredDomainRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="token">Storefront Access Token</label>
        <input type="password" id="token" ref={enteredTokenRef} />
      </div>
      <button type="submit">Connect</button>
    </form>
  );
}

export default ConnectForm;

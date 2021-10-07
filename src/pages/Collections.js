import { useSelector } from "react-redux";
import { Redirect } from "react-router";

function Collections() {
  const shop = useSelector((state) => state.shop.shop);

  if (!shop) {
    return <Redirect to="/connect" />;
  }

  return <div>Collections</div>;
}

export default Collections;

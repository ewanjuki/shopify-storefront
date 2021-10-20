import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import classes from "./Header.module.css";
import { shopActions } from "../../store/shop";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatShopName(name) {
  const names = name.split("-");

  return names.map((name) => capitalizeFirstLetter(name)).join(" ");
}

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const shopName = useSelector((state) => state.shop.shop.name);
  const formattedShopName = formatShopName(shopName);

  function disconnectHandler() {
    dispatch(shopActions.disconnect());
    history.push('/connect');
  }

  return (
    <header className={classes.header}>
      <Link to="/collections" className={classes.logo}>{formattedShopName}</Link>

      <ul className={classes.nav}>
        <li>
          <button onClick={disconnectHandler}>Disconnect</button>
        </li>
        <li>
          <button>Cart (0)</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

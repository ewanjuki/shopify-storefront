import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import classes from "./Header.module.css";
import { shopActions } from "../../store/shop";
import { formatShopName } from "../../lib/utils";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const shopName = useSelector((state) => state.shop.shop.name);
  const formattedShopName = formatShopName(shopName);

  function disconnectHandler() {
    dispatch(shopActions.disconnect());
  }

  return (
    <header className={classes.header}>
      <Link to="/collections" className={classes.logo}>
        {formattedShopName}
      </Link>

      <ul className={classes.nav}>
        <li>
          <button onClick={disconnectHandler}>Disconnect</button>
        </li>
        {/* <li>
          <button>Cart (0)</button>
        </li> */}
      </ul>
    </header>
  );
}

export default Header;

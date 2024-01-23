import { useSelector } from "react-redux";

import classes from "./Footer.module.css";

import { formatShopName } from "../../lib/utils";

function Footer() {
  const currentYear = new Date().getFullYear();

  const shopName = useSelector((state) => state.shop.shop.name);
  const formattedShopName = formatShopName(shopName);

  return (
    <footer className={classes.footer}>
      <p>
        <span>{formattedShopName}</span> &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";

import classes from "./BrowseAllProducts.module.css";

function BrowseAllProducts() {
  return (
    <Link className={classes.link} to="/collections/all">
      All Products
    </Link>
  );
}

export default BrowseAllProducts;

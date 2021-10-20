import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const { imageSrc, title, price, handle } = props.product;

  const formattedPrice = (+price).toFixed(2);

  return (
    <li className={classes["product-item"]}>
      <Link to={`/products/${handle}`}>
        <img src={imageSrc} alt={title} />
        <p>{title}</p>
        <p className={classes.price}>{formattedPrice}</p>
      </Link>
    </li>
  );
}

export default ProductItem;

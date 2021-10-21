import classes from "./ProductIntro.module.css";

function ProductIntro(props) {
  const {title, vendor, price} = props.intro;

  let priceElement;
  if (price.min === price.max) {
    priceElement = <h3>{`$${(+price.min).toFixed(2)}`}</h3>;
  } else {
    priceElement = <h3>{`$${(+price.min).toFixed(2)} - $${(+price
      .max).toFixed(2)}`}</h3>;
  }

  return (
    <div className={classes.intro}>
      <h1>{title}</h1>
      <h5>{vendor}</h5>
      {priceElement}
    </div>
  );
}

export default ProductIntro;

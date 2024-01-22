import classes from './AddToCart.module.css';

function AddToCart(props) {
  const variantOptions = props.variants.variants.map((variant) => (
    <option value={variant.id} key={variant.title}>
      {variant.title} - {`$${(+variant.priceV2.amount).toFixed(2)}`}
    </option>
  ));

  return (
    <form className={classes["add-to-cart"]}>
      <div>
        <label htmlFor="product-select">
          Variants for {props.variants.title.toLowerCase()}
        </label>
        <select id="product-select">{variantOptions}</select>
      </div>
      {/* <button>Add To Cart</button> */}
    </form>
  );
}

export default AddToCart;

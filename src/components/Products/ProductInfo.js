import classes from "./ProductInfo.module.css";

import ProductIntro from "./ProductIntro";
import ProductDescription from "./ProductDescription";
import AddToCart from "./AddToCart";

function ProductInfo(props) {
  return (
    <div className={classes.info}>
      <ProductIntro intro={props.info.intro} />
      <ProductDescription description={props.info.description} />
      <AddToCart
        variants={{
          title: props.info.intro.title,
          variants: props.info.variants,
        }}
      />
    </div>
  );
}

export default ProductInfo;

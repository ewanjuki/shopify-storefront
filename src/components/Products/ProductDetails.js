import classes from "./ProductDetails.module.css";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

function ProductDetails(props) {
  const { description, images, title, priceRange, variants, vendor } =
    props.product;

  const mappedImages = images.edges.map((image) => image.node);
  const intro = {
    title,
    price: {
      min: priceRange.minVariantPrice.amount,
      max: priceRange.maxVariantPrice.amount,
    },
    vendor,
  };
  const mappedVariants = variants.edges.map((variant) => variant.node);

  return (
    <div className={classes.product}>
      <ProductImages images={mappedImages} />
      <ProductInfo info={{ description, intro, variants: mappedVariants }} />
    </div>
  );
}

export default ProductDetails;

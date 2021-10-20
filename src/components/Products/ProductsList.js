import classes from "./ProductsList.module.css";

import ProductItem from "./ProductItem";
import Pagination from "../UI/Pagination";

function ProductsList(props) {
  const mappedProducts = props.products.edges.map((product) => (
    <ProductItem
      key={product.node.handle}
      product={{
        title: product.node.title,
        handle: product.node.handle,
        imageSrc: product.node.images.edges[0].node.transformedSrc,
        price: product.node.priceRange.maxVariantPrice.amount,
      }}
    />
  ));

  return (
    <div className={classes["products-list"]}>
      <h1>Products</h1>
      <ul>{mappedProducts}</ul>
      <Pagination
        hasNext={props.products.pageInfo.hasNextPage}
        hasPrev={props.products.pageInfo.hasPreviousPage}
        onPrev={props.onPrev}
        onNext={props.onNext}
        page={props.page}
      />
    </div>
  );
}

export default ProductsList;

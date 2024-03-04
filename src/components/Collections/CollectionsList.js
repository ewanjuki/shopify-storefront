import classes from "./CollectionsList.module.css";

import CollectionItem from "./CollectionItem";
import BrowseAllProducts from "../UI/BrowseAllProducts";

function CollectionsList(props) {
  const mappedCollections = props.collections
    .filter((collection) => {
      return collection.node.products.edges[0].node.images.edges.length > 0;
    })
    .map((collection) => {
      let imageSrc;
      if (!collection.node.image) {
        imageSrc =
          collection.node.products.edges[0].node.images.edges[0].node
            .transformedSrc;
      } else {
        imageSrc = collection.node.image.transformedSrc;
      }

      return (
        <CollectionItem
          key={collection.node.handle}
          collection={{
            handle: collection.node.handle,
            title: collection.node.title,
            altText: collection.node.handle,
            imageSrc,
          }}
        />
      );
    });

  return (
    <div className={classes["collections-list"]}>
      <h1>Browse Our Collections</h1>
      <ul>{mappedCollections}</ul>
      <BrowseAllProducts />
    </div>
  );
}

export default CollectionsList;

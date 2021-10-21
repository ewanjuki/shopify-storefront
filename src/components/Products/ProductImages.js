import classes from "./ProductImages.module.css";

function ProductImages(props) {
  const otherImages = props.images.map((image, i) => {
    return i > 0 && <img key={i} src={image.transformedSrc} alt={image.altText} />;
  });

  return (
    <div className={classes.images}>
      <img
        src={props.images[0].transformedSrc}
        alt={props.images[0].altText}
        className={classes["featured-image"]}
      />

      {props.images.length > 1 && (
        <div className={classes["other-images"]}>{otherImages}</div>
      )}
    </div>
  );
}

export default ProductImages;

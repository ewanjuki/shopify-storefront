import classes from './ProductDescription.module.css';

function ProductDescription(props) {
  return (
    <div className={classes.description}>
      <h3>Description</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductDescription;

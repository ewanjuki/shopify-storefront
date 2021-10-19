import classes from "./NoCollections.module.css";
import BrowseAllProducts from '../UI/BrowseAllProducts';

function NoCollections() {
  return (
    <div className={classes["no-collections"]}>
      <h1>No Collections Found.</h1>     
      <BrowseAllProducts /> 
    </div>
  );
}

export default NoCollections;

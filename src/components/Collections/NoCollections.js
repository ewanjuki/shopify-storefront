import { Link } from "react-router-dom";

import classes from "./NoCollections.module.css";

function NoCollections() {
  return (
    <div className={classes["no-collections"]}>
      <h1>No Collections Found.</h1>
      <Link to="/collections/all">Browse All Products</Link>
    </div>
  );
}

export default NoCollections;

import { Link, useLocation } from "react-router-dom";
import classes from "./CollectionItem.module.css";

function CollectionItem(props) {
  const location = useLocation();

  return (
    <li className={classes["collection-item"]}>
      <Link to={`${location.pathname}/${props.collection.handle}`}>
        <img src={props.collection.imageSrc} alt={props.collection.altText} />
        <p>{props.collection.title}</p>
      </Link>
    </li>
  );
}

export default CollectionItem;

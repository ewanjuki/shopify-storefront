import classes from "./Pagination.module.css";

function Pagination(props) {
  const nextClasses = `${classes.next} ${
    !props.hasNext ? `${classes.inactive}` : ""
  }`;
  const prevClasses = `${classes.prev} ${
    !props.hasPrev ? `${classes.inactive}` : ""
  }`;

  return (
    <div className={classes.pagination}>
      <span className={prevClasses} onClick={props.onPrev}>&larr;</span>
      <span className={classes.page}>{props.page}</span>
      <span className={nextClasses} onClick={props.onNext}>&rarr;</span>
    </div>
  );
}

export default Pagination;

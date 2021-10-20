import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getProducts,
  getProductsByCollectionHandle,
} from "../store/shop-actions";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ProductsList from "../components/Products/ProductsList";
import NoProducts from "../components/Products/NoProducts";

function Products() {
  const dispatch = useDispatch();
  const params = useParams();

  const [savedProducts, setSavedProducts] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const { status, error, data } = useSelector((state) => state.ui.httpUpdate);
  const { domain, token } = useSelector((state) => state.shop.shop);
  const handle = params.handle;

  useEffect(() => {
    if (handle === "all") {
      dispatch(getProducts(domain, token));
    } else {
      dispatch(getProductsByCollectionHandle(domain, token, handle));
    }
  }, [dispatch, domain, token, handle]);

  useEffect(() => {
    setSavedProducts(data);
  }, [data]);

  function prevPageHandler() {
    const lastNode = savedProducts.edges[0];
    const cursor = lastNode.cursor;

    if (handle === "all") {
      dispatch(getProducts(domain, token, false, "previous", cursor));
    } else {
      dispatch(
        getProductsByCollectionHandle(
          domain,
          token,
          handle,
          false,
          "previous",
          cursor
        )
      );
    }

    setPageNo((state) => state - 1);
  }

  function nextPageHandler() {
    const lastNode = savedProducts.edges[savedProducts.edges.length - 1];
    const cursor = lastNode.cursor;

    if (handle === "all") {
      dispatch(getProducts(domain, token, false, "next", cursor));
    } else {
      dispatch(
        getProductsByCollectionHandle(
          domain,
          token,
          handle,
          false,
          "next",
          cursor
        )
      );
    }

    setPageNo((state) => state + 1);
  }

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered error">{error}</p>;
  }

  if (
    status === "completed" &&
    (!savedProducts || Object.keys(savedProducts).length === 0)
  ) {
    return <NoProducts />;
  }

  return (
    <ProductsList
      products={savedProducts}
      onPrev={prevPageHandler}
      onNext={nextPageHandler}
      page={pageNo}
    />
  );
}

export default Products;

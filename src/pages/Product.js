import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getProduct } from "../store/shop-actions";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ProductDetails from "../components/Products/ProductDetails";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();

  const [savedProduct, setSavedProduct] = useState({});
  const { status, error, data } = useSelector((state) => state.ui.httpUpdate);
  const { domain, token } = useSelector((state) => state.shop.shop);
  const handle = params.handle;

  useEffect(() => {
    dispatch(getProduct(domain, token, handle));
  }, [dispatch, domain, token, handle]);

  useEffect(() => {
    setSavedProduct(data);
  }, [data]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />{" "}
      </div>
    );
  }

  if (error) {
    return <p className="centered error">{error}</p>;
  }

  if (status === 'completed' && (!savedProduct || Object.keys(savedProduct).length === 0)) {
    return <p className="centered error">Unable to get product.</p>
  }

  return <ProductDetails product={savedProduct} />;
}

export default Product;

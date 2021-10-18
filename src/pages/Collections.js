import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import CollectionsList from "../components/Collections/CollectionsList";
import { getCollections } from "../store/shop-actions";
import NoCollections from "../components/Collections/NoCollections";

function Collections() {
  const dispatch = useDispatch();

  const { status, error, data } = useSelector((state) => state.ui.httpUpdate);
  const { domain, token } = useSelector((state) => state.shop.shop);

  const loadedCollections = data || [];

  useEffect(() => {
    dispatch(getCollections(domain, token));
  }, [dispatch, domain, token]);

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

  if (status === 'completed' && (!loadedCollections || loadedCollections.length === 0)) {
    return <NoCollections />
  }

  return <CollectionsList collections={loadedCollections} />;
}

export default Collections;

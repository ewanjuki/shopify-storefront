import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import CollectionsList from "../components/Collections/CollectionsList";
import { getCollections } from "../store/shop-actions";
import NoCollections from "../components/Collections/NoCollections";

function Collections() {
  const dispatch = useDispatch();

  const [savedCollections, setSavedCollections] = useState([]);
  const { status, error, data } = useSelector((state) => state.ui.httpUpdate);
  const { domain, token } = useSelector((state) => state.shop.shop);
  
  useEffect(() => {
    dispatch(getCollections(domain, token));
  }, [dispatch, domain, token]);

  useEffect(() => {
    setSavedCollections(data)
  }, [data]);

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

  if (status === 'completed' && (!savedCollections || savedCollections.length === 0)) {
    return <NoCollections />
  }

  return <CollectionsList collections={savedCollections} />;
}

export default Collections;

import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.CollectionId);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  //This selector needs a part of the state depending on the URL parmeter
  collection: selectCollection(ownProps.match.params.CollectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

import React, { Component } from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collectionpreviewcomponent/collection-preview.component";
class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

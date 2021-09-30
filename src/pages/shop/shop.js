import React, { useEffect } from "react";
import SHOP_DATA from "./2.1 shop.data";
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'



const Shop = () => {
  const collections = SHOP_DATA;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Shop;

import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../collectionItem/collection-item";

const CollectionPreview = ({title, items}) => (
  <div className = "collection-preview">
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter((item, id)=> id < 4)
            .map(({id, ...otherItemProps}) =>(
                <CollectionItem key = {id} {...otherItemProps}/>
            ))}
    </div>
  </div>
);

export default CollectionPreview;

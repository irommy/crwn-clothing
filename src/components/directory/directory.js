import React from "react";
import "./directory.scss";
import sections from "../12.4 directory.data";
import MenuItem from "../menu-item/menu-item";

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps}) => (<MenuItem key = {id} {...otherSectionProps}/>))}
    </div>
  );
};

export default Directory;

import React from "react";
import { IMG_URL_CDN } from "../../constant";

const MenuCard = ({...restaurant }) => {
  const listrestaurant=Object.values (restaurant);
  return listrestaurant?.map((rest) => {
    const item = rest.card.info;
    const { imageId, name , id,category} = item;
    return (
      <div className="items" key={id}>
        <div >
          <img alt="img" src={IMG_URL_CDN + imageId} />
          <h3>{name}</h3>
          <h4>category : {category}</h4>
        </div>
        <button className="menucardbtn">Add to Cart</button>
      </div>
    );
  });
};

export default MenuCard;

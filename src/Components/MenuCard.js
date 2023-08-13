import React from "react";
import { IMG_URL_CDN } from "../../constant";

const MenuCard = ({...restaurant }) => {
  const listrestaurant=Object.values (restaurant);
  return listrestaurant?.map((rest) => {
    const item = rest.card.info;
    const { imageId, name , id,category ,price} = item;
    return (
      <div className="items" key={id}>
        <div >
          <img alt="img" src={IMG_URL_CDN + imageId} />
          <hr/>
          <h2>{name}</h2>
          <hr/>
          <h3>category : {category}</h3>
          <h3>price :- {parseInt(price/ 100)}</h3>
        </div>
        <button className="menucardbtn">Add to Cart</button>
      </div>
    );
  });
};

export default MenuCard;

import React from "react";
import { IMG_URL_CDN } from "../../constant";

const MenuCard = ({...restaurant }) => {
  const listrestaurant=Object.values (restaurant);
  return listrestaurant?.map((rest) => {
    const item = rest.card.info;
    const { imageId, name , id,category ,price} = item;
    return (
      <div className=" bg-white max-w-xs max-h-full m-4 border-black border-r-4 border-b-4 border-l-4 p-1" key={id}>
        <div  className="grid gap-3 grid-cols-1">
          <img alt="img" src={IMG_URL_CDN + imageId} />
          <hr/>
          <h2 className="font-bold text-3xl">{name}</h2>
          <hr/>
          <h3 className="font-bold text-xl">category : {category}</h3>
          <h3 className="font-bold text-lg">price :- {parseInt(price/ 100)}</h3>
        </div>
        <button className="rounded-2xl bg-black p-2 text-white ml-[111px]">Add to Cart</button>
      </div>
    );
  });
};

export default MenuCard;

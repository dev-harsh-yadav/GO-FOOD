import React from "react";
import { IMG_URL_CDN } from "../../constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/CartSlice";

const MenuCard = ({...restaurant }) => {
  const dispatch=useDispatch();
  const handelAddItems=(items)=>
  {
    dispatch(addItem(items))
  }


  const listrestaurant=Object.values (restaurant);

  return listrestaurant?.map((rest) => {
    const item = rest.card.info;
    const { imageId, name , id,category ,price} = item;
    return (
      <div className="drop-shadow-lg bg-white max-w-xs max-h-full m-4 rounded-xl p-3 " key={id}>
        <div  className="grid gap-3 grid-cols-1">
          <img alt="img" src={IMG_URL_CDN + imageId} />
          <hr/>
          <h2 className="font-bold text-3xl">{name}</h2>
          <hr/>
          <h3 className="font-bold text-xl">Category : {category}</h3>
          <h3 className="font-bold text-lg">Price :- ₹ {parseInt(price/ 100)}</h3>
        </div>
        <button 
        className="rounded-2xl bg-black p-2 text-white ml-[111px] "
        onClick={()=>handelAddItems(item)}>Add to Cart</button>
      </div>
    );
  });
};

export default MenuCard;

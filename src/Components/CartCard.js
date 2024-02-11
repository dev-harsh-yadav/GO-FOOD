import React, { useState } from "react";
import { IMG_URL_CDN } from "../../constant";
import { useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity } from "../../utils/CartSlice";
import { PlusCircle, MinusCircle } from "lucide-react";

const CartCard = ({ id, name, description, imageId, price, quantity }) => {
  const dispatch = useDispatch();
  
  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }

  function handleIncrement() {
    dispatch(incrementQuantity(id));
  }

  function handleDecrement() {
    dispatch(decrementQuantity(id));
  }

  return (
    <div
      className="drop-shadow-lg  max-w-xs max-h-full m-4  p-3 bg-orange-100"
      key={id}
    >
      <div className="grid gap-3 grid-cols-1">
        <img alt="img" src={IMG_URL_CDN + imageId} />
        <hr />
        <h2 className="font-bold text-3xl">{name}</h2>
        <hr />
        <h3 className="font-black text-xl">Description : {description}</h3>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">
            Price: 💸{parseInt(price / 100)}
          </h3>
          <div className="flex items-center">
            <button className="mx-2" onClick={handleDecrement}>
              <MinusCircle />
            </button>
            <span>{quantity}</span>
            <button className="mx-2" onClick={handleIncrement}>
              <PlusCircle />
            </button>
          </div>
        </div>
        <button
          className="rounded-2xl justify-center  bg-black p-2 text-white  "
          onClick={() => handleRemoveItem(id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartCard;

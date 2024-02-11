import React, { useState } from "react";
import { IMG_URL_CDN } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/CartSlice";
import EmptyRestaurant from "./EmptyRestaurant";
import { Bounce, toast } from "react-toastify";

const MenuCard = ({ ...restaurant }) => {
  const [addedItems, setAddedItems] = useState([]);
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart.item) || [];

  const handleAddToCart = (item, name) => {
    if (addedItems.includes(item.id)) {
      toast.error(`${name} is already in the cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setAddedItems([...addedItems, item.id]);
      toast.success(`${name} added to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      dispatch(addItem(item));
    }
  };

  const listrestaurant = Object.values(restaurant);

  return listrestaurant.length <= 0 ? (
    <EmptyRestaurant />
  ) : (
    listrestaurant?.map((rest) => {
      const item = rest.card.info;
      const { imageId, name, id, category, price } = item;
      const isInCart = itemsInCart.find((cartItem) => cartItem.id === id);
      const isAdded = addedItems.includes(item.id);
      return (
        <div
          className="drop-shadow-lg bg-white max-w-xs max-h-full m-4 rounded-xl p-3"
          key={id}
        >
          <div className="grid gap-3 grid-cols-1">
            <img alt="img" src={IMG_URL_CDN + imageId} />
            <hr />
            <h2 className="font-bold text-3xl">{name}</h2>
            <hr />
            <h3 className="font-bold text-xl">Category : {category}</h3>
            <h3 className="font-bold text-lg">
              Price :- ₹ {parseInt(price / 100)}
            </h3>
          </div>
          <button
            className="rounded-2xl bg-black p-2 text-white ml-[111px] "
            onClick={() => handleAddToCart(item, name)}
            disabled={isInCart || isAdded}
          >
            { isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      );
    })
  );
};

export default MenuCard;

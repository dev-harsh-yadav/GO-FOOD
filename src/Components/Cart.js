import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../../utils/CartSlice";
const Cart = () => {
  const FoodItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };
  const totalCost = FoodItems.map((items) => {
    return items?.price / 100 || 0;
  }).reduce((acc, cur) => acc + cur, 0);
  console.log(FoodItems);
  return (
    <div>
      <div className="flex justify-center font-bold text-4xl bg-purple-300 p-4 my-3 mx-1">
        Items in Cart - {FoodItems.length}
        {"🛒"}
        <div>
          <button
            className=" rounded-2xl bg-white p-2 text-black text-2xl  mx-[200px]"
            onClick={() => handelClearCart()}
          >
            Clear cart{" "}
          </button>
        </div>
      </div>
      {/*rendering the card for billing */}
      <div className="flex flex-wrap justify-center">
        {FoodItems.map((item) => (
          <CartCard {...item} />
        ))}
      </div>
      <div className="flex justify-center align-center font-bold text-4xl bg-purple-300 p-4 my-3 mx-1">
        {" Total Amount "}- {totalCost.toFixed(2)}
        {" ₹  "}
        <div className="flex flex-wrap justify-between">
          <button className=" text-2xl rounded-2xl bg-white p-2 text-black mx-[200px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

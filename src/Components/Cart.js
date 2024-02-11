import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../../utils/CartSlice";
import EmptyMenuCard from "./EmptyMenuCard";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const foodItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalCost = foodItems.reduce((acc, cur) => {
    return acc + (cur.price / 100) * cur.quantity; // Multiply price by quantity
  }, 0);

  return (
    <div>
      <div className="flex justify-center font-bold text-4xl bg-purple-300 p-4 my-3 mx-1">
        Items in Cart - {foodItems.length}
        <ShoppingCart size={"38"} />
        <div>
          <button
            className="rounded-2xl bg-white p-2 text-black text-2xl mx-[200px]"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </div>
      </div>

      {foodItems.length === 0 ? (
        <EmptyMenuCard />
      ) : (
        <div className="flex flex-wrap justify-center">
          {foodItems.map((item) => (
            <CartCard key={item.id} {...item} />
          ))}
        </div>
      )}

      <div className="flex justify-center align-center font-bold text-4xl bg-purple-300 p-4 my-3 mx-1">
        Total Amount - {totalCost.toFixed(2)} ₹
        <div className="flex flex-wrap justify-between">
          <button className="text-2xl rounded-2xl bg-white p-2 text-black mx-[200px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

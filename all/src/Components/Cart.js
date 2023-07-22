import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" w-[90%] max-w-7xl my-0 mx-auto mt-6">
      <h2 className="text-lg  font-medium">Cart Items</h2>
      <button className="bg-green-400 px-3" onClick={() => handleClearCart()}>
        Clear cart
      </button>

      {cartItems.length === 0 ? (
        <p> Cart is empty</p>
      ) : (
        cartItems?.map((item) => {
          console.log(item);
          return (
            <div key={item?.id}>
              <p>{item?.name}</p>
              <div className="flex gap-2 items-center ">
                <button className="border p-1">+</button>
                <span>0</span>
                <button className="border p-1">-</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;

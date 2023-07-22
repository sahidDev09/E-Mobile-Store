import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const CartPage = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto">
        <h1 className=" text-3xl font-bold text-center h-[300px] pt-[50px] text-gray-400">
          Cart is Empty!
        </h1>
        <NavLink to="/menu">
          <button className=" py-3 px-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md mt-10">
            Go Shop
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="parent block container mx-auto m-10 p-5 sm:p-0">
      <div className="tableHead grid grid-cols-5 text-gray-500">
        <p>Item</p>
        <p className=" invisible sm:visible">Price</p>
        <p>Quantity</p>
        <p className=" invisible sm:visible">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr className=" mt-5" />

      <div className="cartDAta">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
      <div className=" flex justify-between">
        <NavLink to="/menu">
          <button className=" py-3 px-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md mt-10">
            Continue Shopping
          </button>
        </NavLink>
        <button
          onClick={clearCart}
          className="py-3 px-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md mt-10">
          Clear cart
        </button>
      </div>
      {/* order total amount */}

      <div className=" bg-slate-200 w-[400px] mt-7 p-5 mb-[100px]">
        <div className=" flex justify-between text-gray-500">
          <h1>Subtotal</h1>
          <p>
            <FormatPrice price={total_amount} />
          </p>
        </div>
        <div className=" flex justify-between mt-5 text-gray-500">
          <h1>Shipping Fee</h1>
          <p>
            <FormatPrice price={shipping_fee} />
          </p>
        </div>
        <hr className=" mt-5 border-b-[1px] border-gray-300" />

        <div className=" flex justify-between mt-5 text-gray-500">
          <h1>Order Total</h1>
          <p>
            <FormatPrice price={shipping_fee + total_amount} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

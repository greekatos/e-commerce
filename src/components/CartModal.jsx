// CartModal.js
import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";
import CartItem from "./CartItem";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const CartModal = () => {
  const { cartItems, showCart, toggleCart } = useContext(CartContext);
  const modalRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = item.sale
      ? item.price - (Math.floor(Math.random() * 11) + 5)
      : item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      console.log({ eventTarget: event.target });
      console.log({ modalRef });
      if (
        modalRef.current !== null &&
        !modalRef.current.contains(event.target) &&
        event.target.tagName !== "svg" &&
        !event.target.closest("svg")
      ) {
        toggleCart();
      }
    };

    if (showCart) {
      document.addEventListener("click", handleOutsideClick);
      setInitialized(true);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showCart, toggleCart]);

  if (!initialized || !showCart) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 flex justify-end bg-black bg-opacity-50 transform ${
        showCart ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div
        className='w-96 flex flex-col bg-white shadow-lg overflow-y-auto'
        ref={modalRef}
      >
        <div className='px-4 flex justify-end'>
          <button
            onClick={toggleCart}
            className=' px-4 py-4 text-2xl text-[#0071BD] hover:text-[#3390ce]'
          >
            <FaTimes />
          </button>
        </div>
        <div>
          <h2 className='px-8 py-4 text-xl text-[#0071BD] font-bold'>
            Cart ({totalQuantity})
          </h2>
          {cartItems.length === 0 ? (
            <p className='px-8'>Your cart is empty.</p>
          ) : (
            <ul className='px-8 h-[70vh] overflow-scroll overflow-x-hidden'>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
        <div className='absolute w-96 bottom-0 flex justify-between items-center p-8 text-xl font-bold'>
          <div>
            Subtotal:
            <span className='font-bold text-lg text-[#0071BD]  px-2'>
              {totalAmount}
            </span>
          </div>
          <span className=' font-normal text-lg text-slate-950'>
            <Link to='/checkout'>
              <button
                className={`border px-4 py-2 font-bold  text-[#0071BD]  ${
                  cartItems.length === 0
                    ? "opacity-60 "
                    : "hover:bg-[#228B22] hover:text-white"
                }`}
                disabled={cartItems.length === 0}
                onClick={toggleCart}
              >
                Go to checkout
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;

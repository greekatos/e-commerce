import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export const Counter = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <div className='flex justify-end items-center w-full'>
      <button
        className='text-gray-600  hover:text-gray-600 border w-8'
        onClick={() => decreaseQuantity(item.id)}
      >
        <span className='flex items-center h-7 justify-center text-xl hover:bg-[#228B22] hover:text-white'>
          <AiOutlineMinus />
        </span>
      </button>
      <span className='flex justify-center items-center bg-gray-200 text-lg border w-8 text-[#228B22]'>
        {item.quantity}
      </span>
      <button
        className='text-gray-600 hover:text-gray-800 border w-8'
        onClick={() => increaseQuantity(item.id)}
      >
        <span className='flex items-center h-7 justify-center text-xl hover:bg-[#228B22] hover:text-white'>
          <AiOutlinePlus />
        </span>
      </button>
    </div>
  );
};

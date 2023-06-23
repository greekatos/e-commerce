import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductItem = ({ item, handleAddToCart }) => {
  const { pathname } = useLocation();
  const isSales = pathname.includes("sales");
  const isProducts = pathname.includes("product");

  return (
    <div
      key={item.id}
      className={`m-2 p-4 pt-0 flex flex-col ${
        isProducts ? "h-[23rem]" : "h-[20rem]"
      } border bg-[#FFFFFF] border-[#E9E9E9] hover:border-[#228B22]`}
    >
      <Link to={`/products/${item.id}`}>
        <div className='flex justify-center h-[14rem] relative'>
          <img
            src={item.image}
            alt='product'
            className='object-cover w-[400px] h-[225px]'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-10' />
          {isSales && (
            <div className='flex items-center justify-center bg-[#BD4E24] text-sm rounded-xl text-white w-20 h-6 absolute top-3 left-3'>
              ON SALE
            </div>
          )}
        </div>
        <div className='flex flex-col items-center pt-4'>
          <h3 className='text-base   text-[#0071BD] hover:underline'>
            {item.name}
          </h3>
          <div className='flex '>
            <p className={`font-bold mx-2 ${isSales ? "line-through" : ""}`}>
              {item.price}$
            </p>
            {isSales && (
              <p className='font-bold mx-2 text-[#228B22]'>
                {item.price - (Math.floor(Math.random() * 11) + 5)}$
              </p>
            )}
          </div>
        </div>
      </Link>
      {isProducts && (
        <div className='flex justify-around mt-8'>
          <button
            className=' w-24 border bg-[#E9E9E9] text-sm font-bold hover:bg-[#228B22] hover:text-white'
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
          <button
            className='w-24 border bg-[#E9E9E9] text-base font-bold hover:bg-[#228B22] hover:text-white'
            onClick={() => {}}
          >
            Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;

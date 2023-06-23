import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../productsData";
import { useParams } from "react-router";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import StarRating from "./StarRating";

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((prod) => prod.id.toString() === id);

  const { increaseQuantity, decreaseQuantity, addToCart, cartItems } =
    useContext(CartContext);
  console.log({ cartItems });
  const cartItem = cartItems?.find((item) => item?.id.toString() === id);
  console.log({ cartItem, cartItems });

  return (
    <div className='flex justify-center items-center w-full h-full mt-10'>
      <div className='flex flex-col justify-center items-center xl:w-[60%] lg:w-[80%] md:w-[80%]'>
        <h2 className='text-2xl font-bold m-4 text-[#0071BD]'>
          {product?.name}
        </h2>
        <div className='flex px-10  bg-[#E9E9E9]'>
          <div className='px-5 '>
            <img
              src={product.image}
              alt='Product'
              className='object-cover w-[600px] h-[500px]'
            />
          </div>
          <div className='w-1/2 p-10 '>
            <p className='text-gray-600 mb-4'>{}</p>
            <p className='mt-4 font-bold text-[#0071C2]'>Details</p>
            <p className='mt-2'>{product.description}</p>
            <p className='mt-4 font-bold text-[#0071C2]'>Add a review</p>
            <StarRating />
            <div className='flex justify-around mt-24 mb-4'>
              <p className='text-gray-600 mb-4'>
                Price:
                <span className='ml-3 font-bold text-[#0071C2]'>
                  ${product?.price}
                </span>
              </p>
              <div className='flex justify-end items-center w-full'>
                <button
                  className='text-gray-600  hover:text-gray-600 border border-white w-8'
                  onClick={() => decreaseQuantity(cartItem?.id)}
                >
                  <span className='flex items-center h-8 w-8 justify-center text-xl hover:bg-[#228B22] hover:text-white'>
                    <AiOutlineMinus />
                  </span>
                </button>
                <span className='flex justify-center items-center bg-[#228B22] text-lg m-1 border-2 border-white w-9 h-9 text-white'>
                  {!!cartItem?.quantity ? cartItem.quantity : 0}
                </span>
                <button
                  className='text-gray-600 hover:text-gray-800 border border-white w-8'
                  onClick={() => {
                    if (!cartItem) {
                      addToCart(product);
                    } else {
                      increaseQuantity(product.id);
                    }
                  }}
                >
                  <span className='flex items-center h-8 w-8 justify-center text-xl hover:bg-[#228B22] hover:text-white'>
                    <AiOutlinePlus />
                  </span>
                </button>
              </div>
            </div>
            <div className='flex justify-between mt-1'>
              <button
                className='p-2 w-44 border-2 border-white text-[#3390ce] font-bold text-xl hover:bg-[#228B22] hover:text-white'
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
              <button className='p-2 w-44 border-2 border-white text-white font-bold text-xl bg-[#228B22] hover:text-[#3390ce]'>
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;

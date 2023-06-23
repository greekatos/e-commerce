import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Counter } from "./Counter";

const CartItem = ({ item, key }) => {
  const { toggleCart } = useContext(CartContext);
  return (
    <div
      key={key}
      className='flex flex-col items-start justify-between py-8 px-4 border-y'
    >
      <div className='flex'>
        <img
          src={item.image}
          alt={item.name}
          className='object-cover w-32 h-32 mr-4'
        />
        <div>
          <Link to={`/products/${item.id}`}>
            <h3
              className='text-base  hover:text-[#228B22] '
              onClick={() => toggleCart()}
            >
              {item.name}
            </h3>
          </Link>
          <p className='text-sm '>
            Price:
            {item.sale ? (
              <>
                <span className='font-bold ml-2 line-through'>
                  {item.price}$
                </span>
                <span className='font-bold ml-2 text-[#228B22]'>
                  {item.price - (Math.floor(Math.random() * 11) + 5)}$
                </span>
              </>
            ) : (
              <span className='font-bold text-[#0071BD]'> {item.price}</span>
            )}
          </p>
        </div>
      </div>
      <Counter item={item} />
    </div>
  );
};

export default CartItem;

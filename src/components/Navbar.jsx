import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "Products", href: "/products" },
  { text: "Sales", href: "/sales" },
  { text: "Announcements", href: "/announcements" },
];

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { showCart, cartItems, toggleCart } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      {sticky && <div className='w-full h-32'></div>}
      <div
        className={`  w-full h-32 shadow-md flex justify-center items-center bg-[#FFFFFF] ${
          !showCart && sticky ? "fixed top-0 z-50 animate-expand-height" : " "
        }`}
      >
        <div className=' w-[60%] h-full flex items-center justify-between'>
          <div className='w-28 pl-4'>
            <img src='/LOGO.jpg' alt='logo' onClick={scrollToTop} />
          </div>
          <ul className='flex h-full justify-end items-center uppercase'>
            {menuItems.map((item, index) => {
              const key = `${item.id}_${index}`;
              return (
                <li
                  key={key}
                  className='p-4 text-lg text-[#228B22] font-bold hover:text-[#3390ce] hover:underline'
                >
                  <Link to={item.href} onClick={() => scrollToTop()}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
            <li
              className={
                totalQuantity > 0
                  ? "m-14 mt-8 text-[#0071BD] hover:text-[#3390ce] text-xl"
                  : "m-14 text-[#0071BD] hover:text-[#3390ce] text-xl"
              }
            >
              <button onClick={toggleCart}>
                {totalQuantity > 0 && (
                  <span className='flex justify-center items-center text-sm w-4 h-4 bg-[#228B22] text-white ml-4 rounded-full'>
                    {totalQuantity}
                  </span>
                )}
                <FaShoppingCart />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

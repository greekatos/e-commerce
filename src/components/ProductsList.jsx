// ProductList.js
import React, { useContext, useEffect, useMemo, useState } from "react";
import { products } from "../productsData";
import { CartContext } from "../context/CartContext";
import TextField from "./TextField";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import { useLocation } from "react-router";

const categories = [
  "All",
  "Soaps",
  "Moisturizers",
  "Skincare",
  "Perfumes",
  "Essential oils",
  "Serums",
  "Sets",
];

function ProductsList() {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const filteredProducts = useMemo(() => {
    const filtered = products
      .filter((product) => {
        const nameMatch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const categoryMatch = product.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return nameMatch || categoryMatch;
      })
      .filter((p) => !p.sale);
    if (filtered.length) {
      return filtered;
    }
    return [];
  }, [searchTerm]);

  const { pathname } = useLocation();
  const isSales = pathname.includes("sales");

  const salesProducts = useMemo(() => {
    return products.filter((product) => {
      return product.sale;
    });
  }, []);

  const handleAddToCart = (item) => {
    setShowSnackbar(true);
    addToCart(item);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  const debouncedSearch = (query) => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setLoading(true);
    debouncedSearch(value);
  };

  const onCategoryClick = (category) => {
    if (category === "All") {
      setSearchTerm("");
    } else {
      setSearchTerm(category);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className='flex justify-center h-full'>
      <div className='xl:w-[60%] lg:w-[80%] md:w-[80%]'>
        <div className='flex justify-center flex-col items-center m-8'>
          <TextField
            className='h-4 mt-4 border border-[#E9E9E9] focus:border-[#228B22]'
            onChange={onSearchChange}
            placeholder='Search for products...'
          />
        </div>
        <div className='flex justify-center items-center'>
          {categories.map((category) => {
            return (
              <div key={category}>
                <button
                  onClick={() => onCategoryClick(category)}
                  className='group relative transition-colors duration-200 px-4 py-2 m-2 border border-[#E9E9E9] bg-white font-bold hover:border-[#228B22] hover:cursor-pointer'
                >
                  <h3>{category}</h3>
                  <span className='absolute inset-0 bg-[#d3d3d3] opacity-0 group-hover:opacity-20 transition-opacity duration-200 '></span>
                </button>
              </div>
            );
          })}
        </div>
        {loading && <Loader />}
        {!loading && (
          <ul className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 pt-4'>
            {(isSales ? salesProducts : filteredProducts).map((item) => (
              <ProductItem
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </ul>
        )}
        {filteredProducts.length === 0 && (
          <div className='flex justify-center items-center h-[60vh] w-full'>
            No product found.
          </div>
        )}
      </div>
      {showSnackbar && (
        <div className='bg-[#228B22] text-white px-4 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
          Product added to cart!
        </div>
      )}
    </div>
  );
}

export default ProductsList;

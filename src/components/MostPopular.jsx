import React, { useState } from "react";
import { products } from "../productsData";
import ProductItem from "./ProductItem";

const itemsPerPage = 4;
const allItems = products; // your items array

const MostPopular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='xl:w-[60%] md:w-[80%] h-96 mt-8'>
      <h2 className='text-xl font-bold text-[#0071BD]'>Most popular</h2>
      <div className='mt-8'>
        <div className='flex overflow-x-auto'>
          {currentItems.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>

        <div className='flex justify-center mt-4'>
          {[...Array(Math.ceil(allItems.length / itemsPerPage))].map((e, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mr-1 py-1 px-4 bg-gray-200 ${
                currentPage === i + 1 && "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;

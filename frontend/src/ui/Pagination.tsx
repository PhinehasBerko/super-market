import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { config } from "../config";
import { getData } from "../api";
import { IProductProps } from "../types";
import ProductCard from "./ProductCard";
import Container from "./Container";

interface ItemsProps {
  currentItems: IProductProps[];
}

const Items = ({ currentItems }: ItemsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {currentItems &&
        currentItems?.map((item: IProductProps) => (
          <ProductCard key={item?._id} item={item} />
        ))}
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const endpoint = `${config?.baseUrl}/products`;
    const fetchData = async () => {
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching product list", error);
      }
    };
    fetchData();
  }, []);
  const itemsPerPage = 15;
  const [itemOffset, setItemOffset] = useState(0);
  const [itemState, setItemState] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const newState = newOffset + 1;
    setItemOffset(newOffset);
    setItemState(newState);
  };

  return (
    <Container>
      <Items currentItems={currentItems} />
      <div className="flex justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold py-10"
          activeClassName="bg-black text-whiteText"
        />
        <p className="text-gray-400">
          Products from {itemState} to {Math.min(endOffset, products?.length)}
        </p>
      </div>
    </Container>
  );
};

export default Pagination;

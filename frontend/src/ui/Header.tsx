import React, { useEffect, useState } from "react";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import Container from "./Container";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { FaArrowDown, FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { config } from "../config";
import { getData } from "../api";

// props
import { ICategoryProps, IProductProps } from "../types";
// import { divide } from "lodash";
import ProductCard from "./ProductCard";

const navigationBar = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blogs" },
];
const Header = () => {
  const [searchText, setsearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/products/`;
      try {
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.log("Error fetching data ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    try {
      const filtered = products?.filter((item: IProductProps) =>
        item?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filtered);
    } catch (error) {
      console.error(error);
    }
  }, [products, searchText]);
  return (
    <div className="bg-whiteText md:sticky md:top-0 z-50 w-full">
      {/* two headers bArs */}
      {/* 1st implement >> logo >> searchBar >>  menuBar */}
      {/* 2nd implement >> select category >> navigationBAr */}
      <Container className="flex gap-12">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-32 rounded hover:-translate-y-px shadow-md duration-200"
          />
        </Link>
        <div className="flex flex-1 relative">
          <input
            type="text"
            name="searchBar"
            onChange={(e) => setsearchText(e.target.value)}
            value={searchText}
            className="border rounded-full w-full px-4 py-3 hidden md:inline-flex placeholder:text-base placeholder:tracking-wide shadow-sm "
            placeholder="search item ..."
          />
          {searchText ? (
            <IoMdClose
              onClick={() => setsearchText("")}
              className="hidden md:inline-flex absolute right-4 text-lightText hover:text-darkText/70 cursor-pointer bottom-4"
            />
          ) : (
            <FaSearch
              onClick={() => setsearchText("")}
              className=" hidden md:inline-block absolute right-4 text-lightText hover:text-darkText/70 cursor-pointer bottom-4"
            />
          )}
        </div>
        {/* search product will go here */}

        {searchText && (
          <div className="absolute left-0 top-20 w-full mx-auto max-h-[450px] mt-2 px-24 py-3 z-20 shadow-md shadow-skyText scrollbar-hide overflow-y-scroll bg-white text-black">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {filteredProducts?.map((item: IProductProps) => (
                  <ProductCard item={item} setSearchText={setsearchText} />
                ))}
              </div>
            ) : (
              <div className="border rounded-lg border-gray-400 p-5">
                <p className="text-center font-medium">
                  Nothing matches with your search keywords{" - "}
                  <span className="font-semibold text-red-400 underline underline-offset-2">{` ${searchText}`}</span>
                  <br />
                  Please try again
                </p>
              </div>
            )}
          </div>
        )}
        {/* Menubar */}
        <div className="flex items-center gap-x-6 text-2xl">
          <FcBusinessman className="hover:text-skyText duration-200 cursor-pointer" />
          <div className="relative block">
            <CiStar className="cursor-pointer" />
            <span className="inline-flex items-center justify-center absolute top-1 -right-1 bg-red-500 w-4 h-4  rounded-full text-whiteText text-sm ">
              0
            </span>
          </div>
          <div className="relative block">
            <FaShoppingBag className="cursor-pointer" />
            <span className="inline-flex items-center justify-center absolute top-1 -right-1 bg-red-500 w-4 h-4  rounded-full text-whiteText text-sm ">
              0
            </span>
          </div>
        </div>
        {/* 2nd Row for Header */}
      </Container>
      <div className="bg-darkText text-whiteText ">
        <Container className="py-2 max-w-4xl flex gap-4 items-center justify-between">
          <Menu>
            <MenuButton className="inline-flex gap-2 mt-2 items-center rounded-md border py-2 px-3 border-gray-400 hover:border-whiteText font-semibold text-gray-300 hover:text-whiteText">
              Select Category <FaArrowDown className="mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95 "
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-whiteText/5 bg-black p-1 text-sm text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
                {categories.map((item: ICategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {navigationBar.map(({ title, link }) => (
            <Link
              to={link ? link : "/"}
              className="uppercase hidden md:inline-flex font-semibold text-sm text-whiteText/70 hover:text-whiteText duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full  h-[1.5px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Header;

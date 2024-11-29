import React, { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../config";
import { getData } from "../api";
import { ICategoryProps } from "../types";
import Title from "./Title";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const endpoint = `${config?.baseUrl}/categories`;
    const fetchData = async () => {
      const data = await getData(endpoint);
      setCategories(data);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <div className="flex justify-between relative">
        <Title text="Popular Categories" />
        <Link
          to={`/category/`}
          className="relative font-medium overflow-hidden group"
        >
          View All categories{" "}
          <span className="absolute h-[1px] w-full bg-gray-400 bottom-2 left-0 -translate-x-[105%] block group-hover:translate-x-0 duration-200" />
        </Link>
      </div>
      <div className="h-[1px] bg-gray-200 w-full mt-3" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7 mt-10 ">
        {categories.map((item: ICategoryProps) => (
          <Link
            to={`/category/${item?._base}`}
            key={item?._id}
            className="w-full h-auto overflow-hidden group"
          >
            <img
              src={item?.image}
              alt="categoryImage"
              className="w-full h-auto rounded-md group-hover:scale-90 duration-300"
            />
            <div className=" -bottom-3 w-full text-center">
              <h2 className="sm:text-sm md:text-base lg:font-bold ">
                {item?.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Categories;

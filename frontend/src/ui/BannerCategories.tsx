import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getData } from "../api";
import { config } from "../config";
import { Link } from "react-router-dom";
import { ICategoryProps } from "../types";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const BannerCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={1000}
      className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {categories.map((item: ICategoryProps) => (
        <Link
          to={`category/${item?._base}`}
          key={item?._id}
          className="flex flex-1 items-center gap-x-2 font-semibold rounded-md border p-1 border-gray-100 mr-1 hover:border-skyText hover:shadow-lg"
        >
          <img
            src={item.image}
            alt="categories Image"
            className="w-10 h-10 border rounded-full hover:border-skyText object-cover"
          />
          {item.name}
        </Link>
      ))}
    </Carousel>
  );
};

export default BannerCategories;

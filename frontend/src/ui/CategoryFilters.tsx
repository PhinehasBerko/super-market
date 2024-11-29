import React, { useEffect, useState } from "react";
import { getData } from "../api";
import { config } from "../config";
import { Link } from "react-router-dom";
import { ICategoryProps } from "../types";
import Loading from "./Loading";

const CategoryFilters = ({ id }: { id: string | undefined }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.log("Error fetching data ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] cursor-pointer">
        Select Categories
      </p>
      <div className="flex flex-col gap-y-2 min-w-40">
        {loading ? (
          <Loading />
        ) : (
          categories?.map((item: ICategoryProps) => (
            <Link
              key={item?._id}
              to={`/category/${item?._base}`}
              className={`text-base font-medium text-start underline underline-offset-4 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200 ${
                item?._base === id
                  ? "text-greenText decoration-greenText"
                  : "text-lightText"
              }`}
            >
              {item?._base}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryFilters;

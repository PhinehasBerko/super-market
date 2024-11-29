import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";

import { config } from "../config";
import { getData } from "../api";

import { IHighlightsTypeProps } from "../types";
import Container from "./Container";
import { Link } from "react-router-dom";

const Hightlights = () => {
  const [highlights, setHighlights] = useState([]);
  useEffect(() => {
    const endpoint = `${config?.baseUrl}/highlights`;
    const fetchData = async () => {
      try {
        const data = await getData(endpoint);
        setHighlights(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {highlights.map((item: IHighlightsTypeProps) => (
        <div
          key={item?._id}
          className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${item?.image})`,
              color: item?.color,
            }}
          />
          <div
            className="relative z-10 p-6 flex h-full justify-between flex-col"
            style={{ color: item?.color }}
          >
            <div>
              <h3 className="text-2xl font-bold max-w-44">{item?.name}</h3>
              <p>{item?.title}</p>
            </div>
            <Link to={item?._base}>{item?.buttonTitle}</Link>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Hightlights;

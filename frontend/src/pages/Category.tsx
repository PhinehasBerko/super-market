import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../api";
import { config } from "../config";
import Loading from "../ui/Loading";
import Container from "../ui/Container";
import CategoryFilters from "../ui/CategoryFilters";
import { IProductProps } from "../types";
import ProductCard from "../ui/ProductCard";

const Category = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories/${id}`;
      try {
        setLoading(true);
        const data = await getData(endpoint);
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  const formatId = (id: string) => {
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\sw)/g, (match) => match.toUpperCase());
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-5">
            {formatId(id!)}
          </h2>
          <div className="flex items-center">
            <CategoryFilters id={id} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {products?.map((item: IProductProps) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Category;

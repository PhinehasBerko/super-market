import React, { useEffect, useState } from "react";
import Container from "./Container";
import Title from "./Title";
import { IBlogProps } from "../types";
import { config } from "../config";
import { getData } from "../api";
import { Link } from "react-router-dom";

interface IProps {
  blog: IBlogProps[];
}
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const endpoint = `${config?.baseUrl}/blogs`;

    const fetchData = async () => {
      try {
        const data = await getData(endpoint);
        return setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Title text="Our Blog Posts" className="text-center" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogs.map((blog: IBlogProps) => (
          <Link to={`/blogs`} key={blog?._id} className="overflow-hidden group">
            <img
              src={blog?.image}
              alt="blog image"
              className="w-full h-auto group-hover:hover:scale-105 transition-transform duration-200 mb-4 mt-10 object-cover"
            />
            <div>
              <h3 className="uppercase font-semibold text-sm text-gray-400">
                {blog?._base}
              </h3>
              <p className="font-bold line-clamp-1">{blog?.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Blog;

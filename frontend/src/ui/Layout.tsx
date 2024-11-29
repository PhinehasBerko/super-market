import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
type IProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      {children}
      <Footer />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          style: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </>
  );
};

export default Layout;

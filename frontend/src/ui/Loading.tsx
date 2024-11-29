import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col gap-1 items-center justify-center">
      <ThreeCircles
        visible={true}
        height="80"
        width="80"
        color={"#ff7"}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="text-white text-2xl font-bold tracking-widest">
        {" "}
        Loading...
      </p>
    </div>
  );
};

export default Loading;

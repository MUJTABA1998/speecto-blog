import React from "react";

const Image = ({ content }) => {
  return (
    <div className=" w-[300px] sm:w-[500px] md:w-full h-[150px] md:h-[300px]  rounded-[7px]  self-start">
      <img
        src={content.data.url}
        alt={content.data.id}
        className="object-contain h-full w-full  rounded-[4px]"
      />
    </div>
  );
};

export default Image;

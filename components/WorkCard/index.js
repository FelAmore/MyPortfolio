import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative flex justify-center items-center rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "200px" }}
      >
        <img
          alt={name}
          className="h-48 w-48 object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="relative flex justify-center items-center mt-5 text-3xl font-medium font-serif">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="relative flex justify-center items-center text-xl opacity-50 text-center leading-relaxed font-serif">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;

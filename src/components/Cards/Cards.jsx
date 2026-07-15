import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Cards = ({image, title, price}) => {
  return (
    <div className="bg-zinc-300 md:w-70 w-60 p-5 rounded-xl ">

      {/* Card Icons */}
      <div className="flex justify-between">
        <span className="text-3xl text-zinc-500">
          <FaHeart />
        </span>
        <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-2 py-2 text-xl rounded-lg">
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-50">
        <img src={image} className="w-full h-full object-contain mx-auto"/>
      </div>

      {/* Card Content */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-2xl font-semibold mt-4 mb-3">${price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;

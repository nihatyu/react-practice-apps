import React, { useEffect } from "react";

const BurgerCard = ({ item }) => {
  return (
    <div className="bg-white flex flex-col gap-7 px-10 py-4 rounded-xl shadow-xl hover:scale-110 transition-all ease-in duration-200 ">
      <h2> name </h2>
      <p> description </p>
      <a href="#" target="_blank">
        Website: restaurant
      </a>
      <div className="flex overflow-x-auto gap-5 mt-5 text-gray-700">
        <span className="bg-orange-300 p-3 rounded-xl whitespace-nowrap">
          Sos
        </span>
        <span className="bg-orange-300 p-3 rounded-xl whitespace-nowrap">
          Sos
        </span>
        <span className="bg-orange-300 p-3 rounded-xl whitespace-nowrap">
          Sos
        </span>
      </div>
    </div>
  );
};

export default BurgerCard;

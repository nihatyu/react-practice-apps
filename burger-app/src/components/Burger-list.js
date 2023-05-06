import React from "react";
import BurgerCard from "./Burger-card";

const BurgerList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-5 lg:px-0 lg:grid-cols-3 lg:gap-5 xl:gap-10 ">
      {data.map((item, index) => {
        return <BurgerCard key={index} item={item} />;
      })}
      <BurgerCard />
    </div>
  );
};

export default BurgerList;

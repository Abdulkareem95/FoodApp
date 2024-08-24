import { useState } from "react";
import ItemCategory from "./ItemCategory";

const RestaurantsCategory = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  handleClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="mx-auto my-4 p-4 w-6/12 bg-gray-100 shadow-lg ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </span>
        <span className="font-bold">&#8681;</span>
      </div>
      <div>
        {showDetails && <ItemCategory items={data?.card?.card?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantsCategory;

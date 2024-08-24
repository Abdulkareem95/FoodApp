import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import RestaurantsCategory from "./RestaurantsCategory";

const RestaurantsMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [listRes, setListRec] = useState([]);

  const { name, avgRating, city } = resMenu?.cards[2]?.card?.card?.info ?? {};

  const param = useParams();

  const { resId } = param;
  console.log(resId);
  const api =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.2994954&lng=80.4198802&restaurantId=" +
    resId;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(api);

    const json = await data.json();

    setListRec(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(json);

    setResMenu(json?.data);
  };

  if (resMenu === null) return <h1>Loading</h1>;
  // console.log(resMenu);
  const itemCategory =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="mx-auto text-center m-2 p-4 w-6/12 bg-gray-100 shadow-lg">
        <h1 className="font-bold">{name}</h1>
        <p>
          {city}- {avgRating}
        </p>
        <h3>Menu</h3>
      </div>
      <div>
        {itemCategory.map((items) => (
          <RestaurantsCategory key={items?.card?.card?.title} data={items} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantsMenu;

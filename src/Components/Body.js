import { useEffect, useState } from "react";

import RestaurantsCards from "./RestaurantsCards";
import { Link } from "react-router-dom";
import { withPromoted } from "./RestaurantsCards";

// const RestaurantsCards = (props) => {
//   console.log(props);
//   console.log("Abdul kareem");
//   const { brand } = props;
//   console.log(brand);
//   // const { resData } = props;
//   // const { name, avgRating, costForTwo } = resData;

//   return (
//     <div className="res-cards">
//       <div>
//         <img
//           className="res-image"
//           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1d6e44d4-2b6f-46c9-9108-c0ad40839502_698274.jpg"
//         ></img>
//       </div>
//       <div>
//         <h4></h4>
//         <h4></h4>
//         <h4></h4>
//       </div>
//     </div>
//   );
// };

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // console.log(listOfRestaurants);

  useEffect(() => {
    // console.log("use effect called");
    fetchData();
  },[]);

  async function fetchData() {
    const response = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2994954&lng=80.4198802&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(data);
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (listOfRestaurants?.length == 0) return <h1>Loading</h1>;

  return (
    <div>
      <div className="flex">
        <div className="search m-4 p-4">
          <input className="border border-solid border-black" type="text" />
          <button className=" m-4 py-2 px-4 bg-green-100 rounded-lg">
            search
          </button>
        </div>
        <div className="m-4 p-4">
          <button className="flex items-center py-2 px-4 m-4 bg-gray-100 rounded-lg">
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id}>
            {" "}
            <RestaurantsCards resId={res.info.id} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

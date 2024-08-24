// import { resImg } from "../Constants/Const";

const RestaurantsCards = (props) => {
  const resImg =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  console.log(props);

  const { resData } = props;
  const { name, avgRating, costForTwo, cloudinaryImageId } = resData.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 shadow-lg">
      <div>
        <img
          className="h-40 w-[250px] rounded-lg"
          src={resImg + cloudinaryImageId}
        ></img>
      </div>
      <div>
        <h4 className="font-bold py-2 text-lg">{name}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromoted = (RestaurantsCards) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantsCards />
      </div>
    );
  };
};

export default RestaurantsCards;

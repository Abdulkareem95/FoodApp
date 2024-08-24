import { useDispatch } from "react-redux";
import { addItem } from "../Constants/cartSlice";

const ItemCategory = ({ items }) => {
  const resImg =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const dispatch = useDispatch();
  const handleAdditem = (items) => {
    dispatch(addItem(items));
  };

  return (
    <div>
      {items.map((c) => (
        <div
          key={c?.card?.info?.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex "
        >
          <div className="w-9/12">
            <span>{c?.card?.info?.name}</span>
            <span> ₹ {c?.card?.info?.price / 100}</span>
            <p className="text-xs">{c?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <button
              onClick={() => {
                handleAdditem(c);
              }}
              className="bg-black text-green-400 p-2  mx-9 "
            >
              Add
            </button>
            <img src={resImg + c?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCategory;
